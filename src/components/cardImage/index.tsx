import React from "react";
import { Meta } from "../meta/cardGeneratorMeta";
import { Card } from "../options";

type Props = {
  card: Card,
  meta: Meta,
}
type State = {
  fetching: boolean,
  data?: string
}

export default class CardImage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      data: undefined,
      fetching: false,
    }
  }

  render() {
    return (
      <>
        {this.state.data ? <img src={this.state.data} alt="custom card" /> : undefined}
        <button id='generate-button' className={this.state.fetching ? 'fetching' : ''} disabled={this.state.fetching} onClick={() => this.updateCardImage(this.props.card, this.props.meta)}>Generate</button>
      </>
    )
  }

  updateCardImage(card: Card, meta: Meta) {
    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card),
    }

    async function blobTo64(blob: Blob) {
      const reader = new FileReader();
      await new Promise((resolve, reject) => {
        reader.onload = resolve;
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      return reader.result as string
    }

    const parameters = [
      meta.border ? 'border' : undefined,
      meta.scanline ? 'scanline' : undefined,
      meta.locale ? ('locale=' + meta.locale) : undefined,
    ].filter(x => x)

    this.setState({ fetching: true }, () =>
      fetch(`http://localhost:8080/api/card/${meta.act}/${parameters.length ? ('?' + parameters.join('&')) : ''}`, opts)
        .then(res => res.blob())
        .then(blobTo64)
        .then(data => this.setState({ data }))
        .finally(() => this.setState({ fetching: false }))
    )
  }

}
