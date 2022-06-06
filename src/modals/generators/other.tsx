import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta'
import { DownloadImagePanel } from '../../components/imagePanel';
import Section from '../../components/menuSection';
import { RadioOptions } from '../../components/radioOptions';
import SelectOptions from '../../components/selectOptions';
import { blobTo64 } from '../../helpers';

type State = {
  errorCategory?: string
  meta: Omit<Meta, 'locale'>
  data?: string,

  selected: 'backside' | 'special'

  leshyBackside: 'common' | 'submerged' | 'deathcard' | 'squirrel' | 'bee'
  leshySpecial: string
  gbcBackside: 'common' | 'submerged'
  gbcSpecial: 'angler' | 'bluewizard' | 'briar' | 'dredger' | 'dummy' | 'greenwizard' | 'inspector' | 'orangewizard' | 'prospector' | 'royal' | 'sawyer' | 'melter' | 'trapper'
  pixelProfilgateBackside: 'common'
  pixelProfilgateSpecial: 'angler' | 'goobert' | 'leshy' | 'prospector' | 'trapper' | 'lonely'
}
export default class OtherCardGenerator extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props)
    this.state = {
      errorCategory: undefined,
      selected: 'backside',
      leshyBackside: 'common',
      leshySpecial: 'fool',
      gbcBackside: 'common',
      gbcSpecial: 'angler',
      pixelProfilgateBackside: 'common',
      pixelProfilgateSpecial: 'leshy',
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
            {
              id: 'special',
              label: 'Special',
              content: <SelectOptions
                uniqueName='type'
                onChange={type => this.setState({ leshySpecial: type })}
                value={this.state.leshySpecial}
                groups={[
                  {
                    name: 'Tarots',
                    options: [
                      { value: 'fool', label: 'Fool (0)' },
                      { value: 'empress', label: 'Empress (III)' },
                      { value: 'death', label: 'Death (XIII)' },
                      { value: 'devil', label: 'Devil (XV)' },
                      { value: 'tower', label: 'Tower (XVI)' },
                    ]
                  },
                  {
                    name: 'Boons',
                    options: [
                      { value: 'doubledraw', label: 'doubledraw' },
                      { value: 'singlestartingbone', label: 'singlestartingbone' },
                      { value: 'startingbones', label: 'startingbones' },
                      { value: 'startinggoat', label: 'startinggoat' },
                      { value: 'startingtrees', label: 'startingtrees' },
                      { value: 'tutordraw', label: 'tutordraw' },
                    ]
                  },
                  {
                    name: 'Rewards',
                    options: [
                      { value: '1blood', label: '1 Blood' },
                      { value: '2blood', label: '2 Blood' },
                      { value: '3blood', label: '3 Blood' },
                      { value: 'bones', label: 'Bones' },
                      { value: 'bird', label: 'Bird' },
                      { value: 'canine', label: 'Canine' },
                      { value: 'hooved', label: 'Hooved' },
                      { value: 'insect', label: 'Insect' },
                      { value: 'reptile', label: 'Reptile' },
                    ]
                  },
                  {
                    name: 'Trials',
                    options: [
                      { value: 'abilities', label: 'Abilities' },
                      { value: 'blood', label: 'Blood' },
                      { value: 'bones_trial', label: 'Bones' },
                      { value: 'flying', label: 'Flying' },
                      { value: 'pelts', label: 'Pelts' },
                      { value: 'power', label: 'Power' },
                      { value: 'rare', label: 'Rare' },
                      { value: 'ring', label: 'Ring' },
                      { value: 'strafe', label: 'Strafe' },
                      { value: 'submerge', label: 'Submerge' },
                      { value: 'toughness', label: 'Toughness' },
                      { value: 'tribes', label: 'Tribes' },
                    ]
                  }
                ]}
              />,
            },
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
            {
              id: 'special',
              label: 'Special',
              content: <SelectOptions
                uniqueName='type'
                onChange={type => this.setState({ gbcSpecial: type })}
                value={this.state.gbcSpecial}
                groups={[
                  {
                    name: 'NPCs', options: [
                      // angler, bluewizard, briar, dredger, dummy, greenwizard, inspector, orangewizard, prospector, royal, sawyer, smelter, trapper
                      { value: 'angler', label: 'angler' },
                      { value: 'bluewizard', label: 'blue wizard' },
                      { value: 'briar', label: 'briar' },
                      { value: 'dredger', label: 'dredger' },
                      { value: 'dummy', label: 'dummy' },
                      { value: 'greenwizard', label: 'green wizard' },
                      { value: 'inspector', label: 'inspector' },
                      { value: 'orangewizard', label: 'orange wizard' },
                      { value: 'prospector', label: 'prospector' },
                      { value: 'royal', label: 'royal' },
                      { value: 'sawyer', label: 'sawyer' },
                      { value: 'melter', label: 'melter' },
                      { value: 'trapper', label: 'trapper' },
                    ]
                  }
                ]}
              />,
            },
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
                uniqueName='type'
                onChange={type => this.setState({ pixelProfilgateSpecial: type })}
                value={this.state.pixelProfilgateSpecial}
                options={
                  [
                    { value: 'angler', label: 'Angler' },
                    { value: 'goobert', label: 'Goobert' },
                    { value: 'leshy', label: 'Leshy' },
                    { value: 'prospector', label: 'Prospector' },
                    { value: 'trapper', label: 'Trapper' },
                    { value: 'lonely', label: 'Lonely' },
                  ]
                }
              />
            },
          ]} />
        }
      }
    }

    const endpoint2 = (): string => {
      if (this.state.selected === 'special') {
        switch (this.state.meta.act) {
          case 'leshy': {
            switch (this.state.leshySpecial) {
              case 'bones':
              case '1blood':
              case '2blood':
              case '3blood':
              case 'bird':
              case 'canine':
              case 'hooved':
              case 'insect':
              case 'reptile': {
                return `leshy/rewards/${this.state.leshySpecial}`
              }

              case 'fool':
              case 'empress':
              case 'death':
              case 'devil':
              case 'tower': {
                return `leshy/tarots/${this.state.leshySpecial}`
              }

              case 'abilities':
              case 'blood':
              case 'flying':
              case 'pelts':
              case 'power':
              case 'rare':
              case 'ring':
              case 'strafe':
              case 'submerge':
              case 'toughness':
              case 'tribes': {
                return `leshy/trials/${this.state.leshySpecial}`
              }
              case 'bones_trial': {
                return `leshy/trials/bones`
              }

              case 'doubledraw':
              case 'singlestartingbone':
              case 'startingbones':
              case 'startinggoat':
              case 'startingtrees':
              case 'tutordraw': {
                return `leshy/boons/${this.state.leshySpecial}`
              }
            }
            return ''
          }
          // eslint-disable-next-line no-fallthrough
          case 'gbc': {
            // only npc are available as special cards
            return `gbc/npcs/${this.state.gbcSpecial}`
          }
          case 'pixelprofilgate': {
            // only special cards are available as cards
            return `pixelprofilgate/bosses/${this.state.pixelProfilgateSpecial}`
          }
        }
      }

      if (this.state.selected === 'backside') {
        switch (this.state.meta.act) {
          case 'leshy': {
            return `leshy/backs/${this.state.leshyBackside}`
          }
          case 'gbc': {
            return `gbc/backs/${this.state.gbcBackside}`
          }
          case 'pixelprofilgate': {
            return `pixelprofilgate/backs/${this.state.pixelProfilgateBackside}`
          }
        }
      }

      throw 'wtf?'
    }

    return (
      <article>
        <DownloadImagePanel
          fetchImage={async () => {
            const { meta } = this.state

            const parameters = [
              meta.border ? 'border' : undefined,
              meta.scanline ? 'scanline' : undefined,
            ].filter(x => x)

            const endpoint = process.env.REACT_APP_API_ENDPOINT
            const opts = {
              method: 'GET',
            }

            const url = `${endpoint}/api/card/${endpoint2()}${parameters.length ? ('?' + parameters.join('&')) : ''}`

            const response = await fetch(url, opts)
            if (!response.ok) {
              const errorResponse = await response.json()
              const category = errorResponse?.category
              if (typeof category === 'string') {
                this.setState({ errorCategory: category }, () => {
                  const element = document.querySelector(`.menu.error.${category}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                })
              }
              return
            }

            const blob = await response.blob()
            const data = await blobTo64(blob)

            this.setState({ data })

            return data
          }}
          buttons={[
          ]}
        />
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
