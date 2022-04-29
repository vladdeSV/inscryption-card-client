import React from "react";
import { blobTo64 } from "../../helpers";
import { Meta } from "../meta/cardGeneratorMeta";
import { Card } from "../options";
import GenerateButton from "./generateButton";

type RequestErrorType = 'invalid' | 'error'
type Props = {
  card: Card,
  meta: Meta,
}
type State = {
  fetching: boolean,
  data?: string
  error?: RequestErrorType
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
    const clss = ['generate']

    if (this.state.fetching) {
      clss.push('fetching')
    }

    if (this.state.error) {
      clss.push(this.state.error)
    }

    return (
      <>
        {this.state.data ? <img src={this.state.data} alt="custom card" /> : undefined}
        <button className={clss.join(' ')} disabled={this.state.fetching} onClick={() => this.updateCardImage(this.props.card, this.props.meta)}>Generate <GenerateButton /></button>
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
      try {
        const res = await fetch(url, opts)
        if (!res.ok) {

          let error: RequestErrorType = 'error'
          if (res.status === 422) {
            error = 'invalid'
          }

          throw new FooError(error, (await res.json()).category)
        }

        const blob = await res.blob()
        const data = await blobTo64(blob)

        this.setState({ data })

      } catch (e: unknown) {
        let err: RequestErrorType = 'error'
        if (e instanceof FooError) { err = e.type }
        this.setState({ error: err }, () => setTimeout(() => this.setState({ error: undefined }), 5000))
      } finally {
        this.setState({ fetching: false })
      }
    })
  }

}

class FooError extends Error {
  constructor(type: RequestErrorType, category?: string) {
    super(type);
    this.name = this.constructor.name
    this.type = type
    this.category = category
  }
  type: RequestErrorType
  category?: string
}
