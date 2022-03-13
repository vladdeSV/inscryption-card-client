import React from 'react';
import Name from './name';
import Health from './health';
import Power from './power';
import CardType from './cardType';
import Tribe, { Tribe as TribeType } from './tribe';
import Cost from './cost';
import Sigil from './sigil';
import Section from '../menuSection';
import CheckboxGroup from '../checkboxGroup';
import { type } from '@testing-library/user-event/dist/type';

export type Card = {
  name: string,
  health: number, // 0 - 9999
  power: number, // 0 - 9999
  staticon: 'ants' | 'cardsinhand' | 'mirror' | 'bell' | undefined,
  tribes: TribeType[], // Tribe[], max length 5
  bloodCost: number, // 0 - 4
  boneCost: number, // 0 - 13, 0 - 10
  energyCost: number, // 0 - 6
  gemCost: { orange: boolean, green: boolean, blue: boolean },
  sigils: string[], // Sigil[], max length 3
  decals: string[], // ('blood' | 'smoke' | 'paint')[]
  temple: string, // Temple
  terrain: boolean,
  terrainLayout: boolean,
  rare: boolean,
  golden: boolean,
  squid: boolean,
  fused: boolean,
}

export default class CardGeneratorOptions extends React.Component<{ onCardUpdate: (card: Card) => void }, Card> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: '',
      power: 0, // 0 - 9999
      staticon: undefined,
      health: 1,
      tribes: [],
      bloodCost: 0, // 0 - 4
      boneCost: 0, // 0 - 13, 0 - 10
      energyCost: 0, // 0 - 6
      gemCost: { orange: false, green: false, blue: false },
      decals: [],
      sigils: [],
      temple: 'nature', // Temple
      terrain: false,
      terrainLayout: false,
      rare: false,
      golden: false,
      squid: false,
      fused: false,
    }
  }

  render() {
    const sections: { title: string, element: any }[] = [
      { title: 'Name', element: <Name onValueChange={name => this.setState({ name }, this.onUpdate)} /> },
      { title: 'Type', element: <CardType onValueChange={(rare, terrain, terrainLayout) => this.setState({ rare, terrain, terrainLayout }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Health', element: <Health onValueChange={health => this.setState({ health }, this.onUpdate)} /> },
      { title: 'Power', element: <Power onValueChange={(power, staticon) => this.setState({ power, staticon }, this.onUpdate)} /> },
      { title: 'Tribes', element: <Tribe onValueChange={tribes => this.setState({ tribes }, this.onUpdate)} /> },
      { title: 'Cost', element: <Cost onValueChange={(blood, bone, energy, gems) => this.setState({ bloodCost: blood, boneCost: bone, energyCost: energy, gemCost: gems }, this.onUpdate)} /> },
      { title: 'Abilities', element: <Sigil onValueChange={sigils => this.setState({ sigils }, this.onUpdate)} /> },
      // { title: 'Meta options', element: <><CheckboxGroup options={[{ label: 'Border', value: 'border' }, { label: 'Scanline', value: 'scanline' }]} onUpdate={console.log} /></> },
    ]

    return (
      <section id='options'>
        {sections.map((section, index) => (<Section key={index} title={section.title}>{section.element}</Section>))}
      </section>
    );
  }

  private onUpdate() {
    this.props.onCardUpdate(this.state)
  }
}
