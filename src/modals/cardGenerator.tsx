import React from 'react';
import CardGeneratorMeta, { Meta } from '../components/meta/cardGeneratorMeta';
import CardGeneratorOptions, { Card } from '../components/options';

export default class CardGenerator extends React.Component<{}, { /* card: Card, */ meta: Meta, imageData: string }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      /*
      card: {
        type: 'common',
        name: undefined,
        locale: 'default',
        power: { type: 'power', value: 0 },
        health: 1,
        tribes: [],
        cost: undefined,
        sigils: [],
        meta: {
          rare: false,
          terrain: false,
        }
      },
      */
      imageData: '',
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
      }
    }
  }

  updateCardImage(card: Card) {

    const data: Record<string, any> = {}

    // data.type = card.type
    // data.name = card.name
    // data.health = card.health
    // data.tribes = card.tribes
    // data.sigils = card.sigils
    // data.cost = card.cost
    // data.meta = card.meta
    // data.flags = { terrain: card.meta.terrain }
    // data.flags = { terrain: card.type === 'terrain' }

    // if (card.power.type === 'staticon') {
    //   data.statIcon = card.power.value
    // } else {
    //   data.power = card.power.value
    // }

    // data.border = this.state.meta.border
    // data.locale = card.locale

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

    const act = ((act: string) => {
      switch (act) {
        default:
        case 'leshy': {
          return 'act1'
        }
        case 'gbc': {
          return 'act2'
        }
      }
    })(this.state.meta.act)

    fetch(`http://localhost:8081/${act}/`, opts)
      .then(res => res.blob())
      .then(blobTo64)
      .then(data => this.setState({ imageData: data }))
  }

  render() {
    return (
      <div id='generator'>
        <section className='card-display'>
          <img src={this.state.imageData} alt="custom generated card" />
          {/* <input type='button' id='update-image' value='update' onClick={() => this.updateCardImage(this.state.card)}></input> */}
        </section>
        <section>
          <CardGeneratorOptions onCardUpdate={(card) => console.log(card) /*this.setState({ card })*/} />
          <CardGeneratorMeta onMetaUpdate={console.log} />
          <section id='credits' className='menu'>
            <p className='title'>Credits</p>
            <p>original art from <i>Inscryption</i> by Daniel Mullins, redistrubuted with permissions</p>
            <p>generator made by vladde</p>
          </section></section>

      </div>
    );
  }
}
