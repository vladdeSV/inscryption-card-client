import React from 'react';
import CardGeneratorMeta, { Meta } from '../components/meta/cardGeneratorMeta';
import CardImage from '../components/back/cardImage'

export default class CardGenerator extends React.Component<{}, { errorCategory?: string, meta: Omit<Meta, 'locale'>, type: 'common' }> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      type: 'common',
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
      }
    }
  }

  render() {
    return (
      <article>
        <section className='card-display'>
          <CardImage meta={this.state.meta} setErrorCategory={category => this.setState({ errorCategory: category }, () => {
            if (!category) {
              return
            }

            const element = document.querySelector(`.menu.error.${category}`);
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          })} />
        </section>
        <section className='card-options'>
          <section className='menu'>
            <h1 className='title'>Backside</h1>
          </section>
          {/* <section>
            <Section title='Type'>
              <SelectOptions
                uniqueName='type'
                onChange={type => this.setState({ type })}
                options={[
                  { value: 'common', label: 'Default' }, // (en, pt-br, fr, de, it, ru, es, tk)
                ]}
              />
            </Section>
          </section>
          <hr /> */}
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} useLocale={false} />
        </section>
      </article>
    );
  }
}
