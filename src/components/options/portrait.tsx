import React from 'react';
import CustomPortraitSelect, { CustomPortrait } from './portrait/custom';
import DeathcardPortraitSelect, { Deathcard } from './portrait/deathcard';

export type PortraitData = {
  type: 'custom',
  data: {
    common?: string,
    gbc?: string,
  }
} | {
  type: 'deathcard',
  data: {
    head: 'chief' | 'enchantress' | 'gravedigger' | 'prospector' | 'robot' | 'settlerman' | 'settlerwoman' | 'wildling',
    eyes: number,
    mouth: number,
    lostEye: boolean,
  }
}

type Props = {
  onValueChange: (portrait?: PortraitData) => void
}

type State = {
  selected: 'custom' | 'deathcard' | 'none'
  custom: CustomPortrait,
  deathcard: Deathcard
}
export default class Portrait extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selected: 'none',
      custom: {},
      deathcard: {
        head: 'chief',
        mouth: 0,
        eyes: 0,
        lostEye: false,
      }
    }

    this.onUpdate()
  }

  private onUpdate() {
    console.log('updated');

    switch (this.state.selected) {
      case 'custom': {
        this.props.onValueChange({ type: 'custom', data: this.state.custom })
        break
      }
      case 'deathcard': {
        this.props.onValueChange({ type: 'deathcard', data: this.state.deathcard })
        break
      }
      case 'none': {
        this.props.onValueChange(undefined)
      }
    }
  }

  render() {

    const none = (
      <>
        <h3>None</h3>
      </>
    )

    const custom = <CustomPortraitSelect
      enabled={this.state.selected === 'custom'}
      onUpdate={customPortrait => this.setState({ custom: customPortrait }, this.onUpdate)}
    />

    const deathcard = <DeathcardPortraitSelect
      enabled={this.state.selected === 'deathcard'}
      onUpdate={deathcard => this.setState({ deathcard }, this.onUpdate)}
    />

    const foo = (select: State['selected'], element: JSX.Element) => (
      <label className='portrait'>
        <input type="radio" name="portrait" checked={this.state.selected === select} onChange={() => this.setState({ selected: select }, this.onUpdate)} />
        <section>
          {element}
        </section>
      </label>
    )

    return (
      <>
        {foo('none', none)}
        {foo('deathcard', deathcard)}
        {foo('custom', custom)}
      </>
    )
  }
}
