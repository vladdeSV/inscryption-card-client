import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta';
import CardGeneratorOptions, { Card, templateCard } from '../../components/front/options';
import CardImage from '../../components/front/cardImage'

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
        </section>
      </article>
    );
  }
}

