import React from "react";
import { blobTo64, filterClassNames } from "../../../helpers";
import { Meta } from "../../meta/cardGeneratorMeta";
import GenerateSpinner from "./generateButton";

type Props = {
  meta: Omit<Meta, 'locale'>,
  semiUrl: string,
  setErrorCategory: (category?: string) => void,
}
type State = {
  fetching: boolean,
  data?: string,
  error?: {
    type: 'network',
  } | {
    type: 'input',
    category?: string,
  }
}

export default class SpecialCardImage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      data: undefined,
      fetching: false,
      error: undefined,
    }
  }

  render() {

    const generateSpinner = () => {
      const buttonClassNames = ['generate']

      if (this.state.fetching) {
        buttonClassNames.push('fetching')
      }

      if (this.state.error) {
        buttonClassNames.push('error', this.state.error.type)
      }
      return <button className={filterClassNames(buttonClassNames)} disabled={this.state.fetching} onClick={() => this.updateCardImage(this.props.meta)}>Generate <GenerateSpinner /></button>
    }

    const downloadButton = () => {
      if (!this.state.data) {
        return <button className="image-download" disabled={true}>Download</button>
      }

      const downloadImage = () => {
        if (!this.state.data) {
          return
        }

        const download = document.createElement("a"); //Create <a>
        download.href = this.state.data
        download.download = `special.png`
        download.click();
      }

      return <button className="image-download" disabled={false} onClick={downloadImage}>Download</button>
    }

    return (
      <>
        {this.state.data ? <img src={this.state.data} alt="custom back card" /> : undefined}
        <div className='button-menu'>
          {generateSpinner()}
          {downloadButton()}
        </div>
      </>
    )
  }

  updateCardImage(meta: Omit<Meta, 'locale'>) {
    const parameters = [
      meta.border ? 'border' : undefined,
      meta.scanline ? 'scanline' : undefined,
    ].filter(x => x)

    const endpoint = process.env.REACT_APP_API_ENDPOINT
    const opts = {
      method: 'GET',
    }

    const url = `${endpoint}/api/card/${this.props.semiUrl}${parameters.length ? ('?' + parameters.join('&')) : ''}`

    this.setState({ fetching: true, error: undefined }, async () => {
      const res = await fetch(url, opts)
      if (res.ok) {
        const blob = await res.blob()
        const data = await blobTo64(blob)

        this.setState({ data, fetching: false, error: undefined })
        this.props.setErrorCategory(undefined)
        return
      }

      if (res.status === 404) {
        this.setState(
          { error: { type: 'input' }, fetching: false },
          () => setTimeout(() => this.setState({ error: undefined }), 5000)
        )
        return
      }

      // error handling
      const errorResponse = await res.json()
      const category = errorResponse?.category

      const error = (res.status === 422)
        ? { type: 'input' as const, category }
        : { type: 'network' as const }

      this.setState(
        { error: error, fetching: false },
        () => setTimeout(() => this.setState({ error: undefined }), 5000)
      )

      this.props.setErrorCategory(error?.category)
    })
  }
}
