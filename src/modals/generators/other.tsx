import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta'
import { DownloadImagePanel } from '../../components/imagePanel';
import Section from '../../components/menuSection';
import { RadioOptions } from '../../components/radioOptions';
import SelectOptions from '../../components/selectOptions';

type State = {
  errorCategory?: string
  meta: Omit<Meta, 'locale'>

  selected: 'backside' | 'special'

  leshyBackside: 'common' | 'submerged' | 'deathcard' | 'squirrel' | 'bee'
  gbcBackside: 'common' | 'submerged'
  pixelProfilgateBackside: 'common'
}
export default class OtherCardGenerator extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      selected: 'backside',
      leshyBackside: 'common',
      gbcBackside: 'common',
      pixelProfilgateBackside: 'common',
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
          return <RadioOptions<'backside' | 'special'> uniqueName='other-type' title='Leshy' onOptionChange={selected => this.setState({ selected })} options={[
            {
              id: 'backside',
              label: 'Backside',
              content: <SelectOptions
                uniqueName='kind-lehy'
                onChange={kind => this.setState({ leshyBackside: kind })}
                value={this.state.leshyBackside}
                options={[
                  { value: 'common', label: 'Default' },
                  { value: 'submerged', label: 'Submerged' },
                  { value: 'deathcard', label: 'Death' },
                  { value: 'squirrel', label: 'Squirrel' },
                  { value: 'bee', label: 'Bee' },
                ]}
              />
            },
            { id: 'special', label: 'Special' },
          ]} />
        }
        case 'gbc': {
          return <RadioOptions<'backside' | 'special'> uniqueName='other-type' title='GBC' onOptionChange={selected => this.setState({ selected })} options={[
            {
              id: 'backside',
              label: 'Backside',
              content: <SelectOptions
                uniqueName='kind-gbc'
                onChange={kind => this.setState({ gbcBackside: kind })}
                value={this.state.gbcBackside}
                options={[
                  { value: 'common', label: 'Default' },
                  { value: 'submerged', label: 'Submerged' },
                ]}
              />
            },
            { id: 'special', label: 'Special' },
          ]} />
        }
        case 'pixelprofilgate': {
          return <RadioOptions<'backside' | 'special'> uniqueName='other-type' title='Pixel Profilgate' onOptionChange={selected => this.setState({ selected })} options={[
            {
              id: 'backside',
              label: 'Backside',
            },
            {
              id: 'special',
              label: 'Special',
              content: <SelectOptions
                uniqueName='kind-ppg'
                onChange={kind => this.setState({ pixelProfilgateBackside: kind })}
                value={this.state.pixelProfilgateBackside}
                options={
                  [
                    { value: 'common', label: 'Default' },
                  ]}
              />
            },
          ]} />
        }
      }
    }

    return (
      <article>
        <section className='card-display'>
          <DownloadImagePanel
            fetchImage={async () => { return '' }}
            buttons={[
              {
                label: 'Test',
                enabled: true,
                onClick: async () => {
                  return
                }
              },
            ]}
          />
        </section>
        <section className='card-options'>
          <section>
            <Section title='Kind'>{section()}</Section>
          </section>
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} useLocale={false} />
        </section>
      </article >
    );
  }
}
