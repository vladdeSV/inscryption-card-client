import React from 'react';
import Name from './nameSelect';
import HealthSelect from './healthSelect';
import PowerSelect from './powerSelect';
import CardTypeSelect from './cardTypeSelect';
import TribesSelect from './tribesSelect';
import CostSelect from './costSelect';
import SigilSelect from './sigilSelect';
import Section from '../menuSection';

export type Card = {
  type: string,
  name: string | undefined,
  power: { type: 'power', value: number } | { type: 'staticon', value: string }
  health: number,
  tribes: string[],
  cost: { type: 'blood' | 'bone', amount: number } | undefined,
  sigils: string[],
}

export default class CardGeneratorOptions extends React.Component<{ onCardUpdate: (card: Card) => void }, Card> {
  constructor(props: any) {
    super(props)
    this.state = {
      type: 'common',
      name: undefined,
      power: { type: 'power', value: 0 },
      health: 1,
      tribes: [],
      cost: undefined,
      sigils: [],
    }
  }

  render() {

    const foo: { title: string, c: any, open?: boolean }[] = [
      { title: 'Name', c: <Name onValueChange={name => this.setState({ name }, () => this.props.onCardUpdate(this.state))} />, open: true },
      { title: 'Type', c: <CardTypeSelect onValueChange={type => this.setState({ type }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Health', c: <HealthSelect onValueChange={health => this.setState({ health }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Power', c: <PowerSelect onValueChange={power => this.setState({ power }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Tribes', c: <TribesSelect onValueChange={tribes => this.setState({ tribes }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Cost', c: <CostSelect onValueChange={cost => this.setState({ cost }, () => this.props.onCardUpdate(this.state))} /> },
      { title: 'Abilities', c: <SigilSelect onValueChange={sigils => this.setState({ sigils }, () => this.props.onCardUpdate(this.state))} /> },
    ]

    return (
      <section id='options'>
        {foo.map((d, index) => (<Section key={index} title={d.title} open={d.open}>{d.c}</Section>))}
      </section>
    );
  }
}
