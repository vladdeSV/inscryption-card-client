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
          <hr />
          <Credits />
          <Supporters />
        </section>
      </div>
    );
  }
}

const Credits = () => (
  <section id='credits' className='menu'>
    <p className='title'>Credits</p>
    <p>Original art from <a href="https://www.inscryption.com/"><i>Inscryption</i></a> by Daniel Mullins, redistrubuted with permission</p>
    <p>Generator made by Vladimirs 'vladde' Nordholm</p>
  </section>
)

const Supporters = () => (
  <section id='supporters' className='menu'>
    <p className='title'>Supporters</p>
    <p>Special thanks to the following amazing people for supporting my work on Patreon 🎉 (updated semi-regurarily)</p>
    <ul>
      {['Maj', 'Citywatchers', 'Scott St. Onge'].map((name, index) => (
        <li key={index}>{name}</li>
      ))}
      <li><a href="https://www.patreon.com/vladde">You…?</a></li>
    </ul>
  </section>
)
