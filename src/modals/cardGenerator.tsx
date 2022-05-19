import React from 'react';
import CardGeneratorMeta, { Meta } from '../components/meta/cardGeneratorMeta';
import CardGeneratorOptions, { Card, templateCard } from '../components/front/options';
import CardImage from '../components/front/cardImage'

export default class CardGenerator extends React.Component<{}, { errorCategory?: string, card: Card, meta: Meta }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
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
      <article>
        <section className='card-display'>
          <CardImage card={this.state.card} meta={this.state.meta} setErrorCategory={category => this.setState({ errorCategory: category }, () => {
            if (!category) {
              return
            }

            const element = document.querySelector(`.menu.error.${category}`);
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          })} />
        </section>
        <section className='card-options'>
          <CardGeneratorOptions onCardUpdate={card => this.setState({ card })} errorCategory={this.state.errorCategory} />
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} />
          <hr />
          <Credits />
          <Supporters />
        </section>
      </article>
    );
  }
}

const Credits = () => (
  <section id='credits' className='menu'>
    <div>
      <p className='title'>Credits</p>
      <p>Original art from <a href="https://www.inscryption.com/"><i>Inscryption</i></a> by Daniel Mullins, redistrubuted with permission</p>
      <p>Additional art courtesy of <a href="https://twitter.com/PixelProfligate">Pixel Profilgate</a></p>
      <p>Generator made by Vladimirs Nordholm</p>
    </div>
  </section>
)

const Supporters = () => (
  <section id='supporters' className='menu'>
    <div>
      <p className='title'>Supporters</p>
      <p>Special thanks to the following amazing people for supporting my work on Patreon 🎉 (updated semi-regurarily)</p>
      <ul>
        {['Maj', 'Citywatchers', 'Scott St. Onge'].map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        <li><a href="https://www.patreon.com/vladde">You…?</a></li>
      </ul>
    </div>
  </section>
)
