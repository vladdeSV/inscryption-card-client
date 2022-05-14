import React from "react";
import { blobTo64, filterClassNames } from "../../../helpers";
import { Meta } from "../../meta/cardGeneratorMeta";
import GenerateButton from "./generateButton";

type Props = {
  meta: Omit<Meta, 'locale'>,
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

export default class CardImage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      data: undefined,
      fetching: false,
      error: undefined,
    }
  }

  render() {

    const generateButton = () => {
      const buttonClassNames = ['generate']

      if (this.state.fetching) {
        buttonClassNames.push('fetching')
      }

      if (this.state.error) {
        buttonClassNames.push('error', this.state.error.type)
      }
      return <button className={filterClassNames(buttonClassNames)} disabled={this.state.fetching} onClick={() => this.updateCardImage('common', this.props.meta)}>Generate <GenerateButton /></button>
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
        download.download = `back.png`
        download.click();
      }

      return <button className="image-download" disabled={false} onClick={downloadImage}>Download</button>
    }

    return (
      <>
        {this.state.data ? <img src={this.state.data} alt="custom card" /> : undefined}
        <div className='button-menu'>
          {generateButton()}
          {downloadButton()}
        </div>
      </>
    )
  }

  updateCardImage(type: string, meta: Omit<Meta, 'locale'>) {
    const parameters = [
      meta.border ? 'border' : undefined,
      meta.scanline ? 'scanline' : undefined,
    ].filter(x => x)

    // if host exists in env
    const endpoint = process.env.REACT_APP_API_ENDPOINT
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: type }),
    }

    const url = `${endpoint}/api/card/${meta.act}/back${parameters.length ? ('?' + parameters.join('&')) : ''}`

    this.setState({ fetching: true, error: undefined }, async () => {
      const res = await fetch(url, opts)
      if (res.ok) {
        const blob = await res.blob()
        const data = await blobTo64(blob)

        this.setState({ data, fetching: false, error: undefined })
        this.props.setErrorCategory(undefined)
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
