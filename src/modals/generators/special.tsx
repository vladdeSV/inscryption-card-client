import React from 'react';
import CardGeneratorMeta, { Meta } from '../../components/meta/cardGeneratorMeta'
import CardImage from '../../components/special/cardImage'
import Section from '../../components/menuSection'
import SelectOptions from '../../components/selectOptions'

type State = {
  errorCategory?: string,
  meta: Omit<Meta, 'locale'>,
  leshy: string
  gbc: string
  pixelProfilgate: string
}
export default class SpecialCardGenerator extends React.Component<{}, State> {

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

    let title: string;
    const options = (() => {
      switch (this.state.meta.act) {
        default:
        case 'leshy': {
          title = 'Leshy'
          return <SelectOptions
            uniqueName='type'
            onChange={type => this.setState({ leshy: type })}
            value={this.state.leshy}
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
          />
        }
        case 'gbc': {
          title = 'GBC'
          return <SelectOptions
            uniqueName='type'
            onChange={type => this.setState({ gbc: type })}
            value={this.state.gbc}
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
                  { value: 'smelter', label: 'smelter' },
                  { value: 'trapper', label: 'trapper' },
                ]
              }
            ]}
          />
        }
        case 'pixelprofilgate': {
          title = 'Pixel Profilgate'
          return <SelectOptions
            uniqueName='type'
            onChange={type => this.setState({ pixelProfilgate: type })}
            value={this.state.pixelProfilgate}
            options={
              [
                { value: 'leshy', label: 'Leshy' },
                { value: 'angler', label: 'Angler' },
              ]
            }
          />
        }
      }
    })()

    const endpoint = (): string => {
      switch (this.state.meta.act) {
        case 'leshy': {
          switch (this.state.leshy) {
            case 'bones':
            case '1blood':
            case '2blood':
            case '3blood':
            case 'bird':
            case 'canine':
            case 'hooved':
            case 'insect':
            case 'reptile': {
              return `leshy/rewards/${this.state.leshy}`
            }

            case 'fool':
            case 'empress':
            case 'death':
            case 'devil':
            case 'tower': {
              return `leshy/tarots/${this.state.leshy}`
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
              return `leshy/trials/${this.state.leshy}`
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
              return `leshy/boons/${this.state.leshy}`
            }
          }
          return ''
        }
        // eslint-disable-next-line no-fallthrough
        case 'gbc': {
          // only npc are available as special cards
          return `gbc/npc/${this.state.gbc}`
        }
        case 'pixelprofilgate': {
          // only special cards are available as cards
          return `pixelprofilgate/special/${this.state.pixelProfilgate}`
        }
      }
    }

    return (
      <article>
        <section className='card-display'>
          <CardImage semiUrl={endpoint()} meta={this.state.meta} setErrorCategory={category => this.setState({ errorCategory: category }, () => {
            if (!category) {
              return
            }

            const element = document.querySelector(`.menu.error.${category}`);
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          })} />
        </section>
        <section className='card-options'>
          <section>
            <Section title={`Kind (${title})`}>
              {options}
            </Section>
          </section>
          <hr />
          <CardGeneratorMeta onMetaUpdate={meta => this.setState({ meta })} useLocale={false} />
        </section>
      </article>
    );
  }
}
