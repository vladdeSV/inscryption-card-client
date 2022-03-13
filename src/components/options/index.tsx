import React from 'react';
import Name from './name';
import Health from './health';
import Power from './power';
import CardType from './cardType';
import Tribe from './tribe';
import Cost from './cost';
import Sigil from './sigil';
import Section from '../menuSection';
import CheckboxGroup from '../checkboxGroup';

export type Card = {
  type: string,
  name: string | undefined,
  locale: string,
  power: { type: 'power', value: number } | { type: 'staticon', value: string }
  health: number,
  tribes: string[],
  cost: { type: 'blood' | 'bone', amount: number } | { type: 'gem', gems: ('orange' | 'green' | 'blue')[] } | undefined,
  sigils: string[],
  meta: {
    rare: boolean,
    terrain: boolean,
    // border: boolean,
    // scanline: boolean,
  }
}

export default class CardGeneratorOptions extends React.Component<{ onCardUpdate: (card: Card) => void }, Card> {
  constructor(props: any) {
    super(props)
    this.state = {
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
        // border: false,
      }
    }
  }

  render() {

    const sections: { title: string, element: any }[] = [
      { title: 'Name', element: <Name onValueChange={(state) => this.setState(state, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Type', element: <CardType onValueChange={state => this.setState({ meta: { terrain: state.terrain, rare: state.rare }, type: state.type }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Health', element: <Health onValueChange={health => this.setState({ health }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Power', element: <Power onValueChange={power => this.setState({ power }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Tribes', element: <Tribe onValueChange={tribes => this.setState({ tribes }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Cost', element: <Cost onValueChange={cost => this.setState({ cost }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Abilities', element: <Sigil onValueChange={sigils => this.setState({ sigils }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Meta options', element: <><CheckboxGroup options={[{ label: 'Border', value: 'border' }, { label: 'Scanline', value: 'scanline' }]} onUpdate={console.log} /></> },
    ]

    return (
      <>
        <section id='options'>
          {sections.map((section, index) => (<Section key={index} title={section.title}>{section.element}</Section>))}
          <section className='menu'>
            <p className='title'>Credits</p>
            <p>original art by Daniel Mullins</p>
            <p>website by vladde</p>
          </section>
        </section>
      </>
    );
  }
}
