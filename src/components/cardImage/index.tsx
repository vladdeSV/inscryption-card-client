import React from "react";
import { Meta } from "../meta/cardGeneratorMeta";
import { Card } from "../options";

type Props = {
  card: Card,
  meta: Meta,
}
type State = {
  data?: string
}

export default class CardImage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      data: undefined,
    }
  }

  render() {
    return (
      <>
        {this.state.data ? <img src={this.state.data} alt="custom card" /> : undefined}
        <button onClick={() => this.updateCardImage(this.props.card, this.props.meta)}>does</button>
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

    fetch(`http://localhost:8080/api/card/${meta.act}/${parameters.length ? ('?' + parameters.join('&')) : ''}`, opts)
      .then(res => res.blob())
      .then(blobTo64)
      .then(data => this.setState({ data }))
  }

}
