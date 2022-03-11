import React from 'react';
import CardGeneratorOptions, { Card } from './cardGeneratorOptions';

export default class CardGenerator extends React.Component<{}, { card: Card, imageData: string }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      card: {
        type: 'common',
        name: undefined,
        power: { type: 'power', value: 0 },
        health: 1,
        tribes: [],
        cost: undefined,
        sigils: [],
      },
      imageData: '',
    }
  }

  updateCardImage(card: Card) {

    const data: Record<string, any> = {}

    data.type = card.type
    data.name = card.name
    data.health = card.health
    data.tribes = card.tribes
    data.sigils = card.sigils
    data.cost = card.cost

    if (card.power.type === 'staticon') {
      data.statIcon = card.power.value
    } else {
      data.power = card.power.value
    }

    const opts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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

    fetch('http://localhost:8081/act1/', opts)
      .then(res => res.blob())
      .then(blobTo64)
      .then(data => this.setState({ imageData: data }))

  }

  render() {
    return (
      <div id='generator'>
        <section className='card-display'>
          <img src={this.state.imageData} alt="custom generated card" />
          <input type='button' value='update' onClick={() => this.updateCardImage(this.state.card)}></input>
        </section>
        <CardGeneratorOptions onCardUpdate={(card) => this.setState({ card })} />
      </div>
    );
  }
}
