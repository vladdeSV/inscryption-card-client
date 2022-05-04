import React from "react";
import { blobTo64, filterClassNames } from "../../helpers";
import { Meta } from "../meta/cardGeneratorMeta";
import { Card } from "../options";
import GenerateButton from "./generateButton";

type Props = {
  card: Card,
  meta: Meta,
  setErrorCategory: (category?: string) => void,
}
type State = {
  fetching: boolean,
  data?: string
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
      return <button className={filterClassNames(buttonClassNames)} disabled={this.state.fetching} onClick={() => this.updateCardImage(this.props.card, this.props.meta)}>Generate <GenerateButton /></button>
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
        download.download = `${this.props.card.name ? this.props.card.name.replaceAll(/\W/g, '-') : 'creature'}.png`
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

  updateCardImage(card: Card, meta: Meta) {
    const parameters = [
      meta.border ? 'border' : undefined,
      meta.scanline ? 'scanline' : undefined,
      meta.locale ? ('locale=' + meta.locale) : undefined,
    ].filter(x => x)

    // if host exists in env
    const endpoint = process.env.REACT_APP_API_ENDPOINT
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card),
    }

    const url = `${endpoint}/api/card/${meta.act}/${parameters.length ? ('?' + parameters.join('&')) : ''}`

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
