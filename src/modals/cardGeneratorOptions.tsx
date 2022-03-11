import React from 'react';
import NameSelect from '../components/nameSelect';
import HealthSelect from '../components/healthSelect';
import PowerSelect from '../components/powerSelect';
import CardTypeSelect from '../components/cardTypeSelect';
import TribesSelect from '../components/tribesSelect';
import CostSelect from '../components/costSelect';
import SigilSelect from '../components/sigilSelect';

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
    return (
      <section id='options'>
        <NameSelect onValueChange={name => this.setState({ name }, () => {
          this.props.onCardUpdate(this.state);
          console.log(name);
        })} />
        <CardTypeSelect onValueChange={type => this.setState({ type }, () => this.props.onCardUpdate(this.state))} />
        <HealthSelect onValueChange={health => this.setState({ health }, () => this.props.onCardUpdate(this.state))} />
        <PowerSelect onValueChange={power => this.setState({ power }, () => this.props.onCardUpdate(this.state))} />
        <TribesSelect onValueChange={tribes => this.setState({ tribes }, () => this.props.onCardUpdate(this.state))} />
        <CostSelect onValueChange={cost => this.setState({ cost }, () => this.props.onCardUpdate(this.state))} />
        <SigilSelect onValueChange={sigils => this.setState({ sigils }, () => this.props.onCardUpdate(this.state))} />
      </section>
    );
  }
}
