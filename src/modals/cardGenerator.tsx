import React from 'react';
import CardGeneratorMeta, { Meta } from '../components/meta/cardGeneratorMeta';
import CardGeneratorOptions, { Card, templateCard } from '../components/options';
import CardImage from '../components/cardImage'

export default class CardGenerator extends React.Component<{}, { betaKey: string, card: Card, meta: Meta }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      betaKey: '',
      card: templateCard,
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
        locale: 'default',
      }
    }
  }

  render() {
    return (
      <div id='generator'>
        <section className='card-display'>
          <CardImage card={this.state.card} meta={this.state.meta} />
        </section>
        <section>
          <CardGeneratorOptions onCardUpdate={card => this.setState({ card })} />
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} />
          <Credits />
        </section>
      </div>
    );
  }
}

const Credits = () => (
  <section id='credits' className='menu'>
    <p className='title'>Credits</p>
    <p>original art from <i>Inscryption</i> by Daniel Mullins, redistrubuted with permissions</p>
    <p>generator made by vladde</p>
  </section>
)
