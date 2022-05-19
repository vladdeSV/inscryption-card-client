import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta'
import BackCardImage from '../../components/back/cardImage'
import Section from '../../components/menuSection'
import SelectOptions from '../../components/selectOptions'

type State = {
  errorCategory?: string,
  meta: Omit<Meta, 'locale'>,
  leshy: 'common' | 'submerged' | 'deathcard' | 'squirrel' | 'bee'
  gbc: 'common' | 'submerged'
  pixelProfilgate: 'common'
}
export default class BackCardGenerator extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      leshy: 'common',
      gbc: 'common',
      pixelProfilgate: 'common',
      meta: {
        act: 'leshy',
        border: false,
        scanline: false,
      }
    }
  }

  render() {

    const section = () => {
      switch (this.state.meta.act) {
        case 'leshy': {
          return <Section title='Kind (Leshy)'>
            <SelectOptions
              uniqueName='kind-lehy'
              onChange={kind => this.setState({ leshy: kind })}
              value={this.state.leshy}
              options={[
                { value: 'common', label: 'Default' },
                { value: 'submerged', label: 'Submerged' },
                { value: 'deathcard', label: 'Death' },
                { value: 'squirrel', label: 'Squirrel' },
                { value: 'bee', label: 'Bee' },
              ]}
            />
          </Section>
        }
        case 'gbc': {
          return <Section title='Kind (GBC)'>
            <SelectOptions
              uniqueName='kind-gbc'
              onChange={kind => this.setState({ gbc: kind })}
              value={this.state.gbc}
              options={[
                { value: 'common', label: 'Default' },
                { value: 'submerged', label: 'Submerged' },
              ]}
            />
          </Section>
        }
        case 'pixelprofilgate': {
          return <Section title='Kind (Pixel Profilgate)'>
            <SelectOptions
              uniqueName='kind-ppg'
              onChange={kind => this.setState({ pixelProfilgate: kind })}
              value={this.state.pixelProfilgate}
              options={[
                { value: 'common', label: 'Default' },
              ]}
            />
          </Section>
        }
      }
    }

    const data = (): string => {
      switch (this.state.meta.act) {
        case 'leshy': return this.state.leshy
        case 'gbc': return this.state.gbc
        case 'pixelprofilgate': return this.state.pixelProfilgate
      }
    }

    return (
      <article>
        <section className='card-display'>
          <BackCardImage meta={this.state.meta} kind={data()} setErrorCategory={() => { }} />
        </section>
        <section className='card-options'>
          <section>
            {section()}
          </section>
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} useLocale={false} />
        </section>
      </article>
    );
  }
}
