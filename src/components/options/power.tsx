import React from 'react';
import SelectOptions from '../selectOptions';

export type StatIcon = 'ants' | 'cardsinhand' | 'mirror' | 'bell'

type Props = {
  onValueChange: (power: number, staticon?: StatIcon | undefined) => void,
}
type State = {
  selected: 'power' | 'staticon',
  power: number,
  staticon: StatIcon,
}

export default class PowerSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { selected: 'power', power: 0, staticon: 'ants' }
  }

  private onChange() {
    this.props.onValueChange(this.state.power, this.state.selected === 'staticon' ? this.state.staticon : undefined)
  }

  render() {
    return (
      <>
        <p>
          <input type='radio' defaultChecked={true} name='powertype' id="power-power" onClick={() => this.setState({ selected: 'power' }, this.onChange)} />
          <label htmlFor="power-power">Power</label>
          <input type="number" disabled={this.state.selected !== 'power'} min={0} max={99} defaultValue={0} onChange={e => this.setState({ power: Number(e.target.value) }, this.onChange)} />
        </p>
        <p>
          <input type='radio' name='powertype' id="power-staticon" onClick={() => this.setState({ selected: 'staticon' }, this.onChange)} />
          <label htmlFor="power-staticon">Variable Stat</label>
          <SelectOptions
            uniqueName='staticons'
            disabled={this.state.selected !== 'staticon'}
            onChange={value => this.setState({ staticon: value }, this.onChange)}
            options={[
              { value: 'ants', label: 'Ants' },
              { value: 'bell', label: 'Bell Ringer' },
              { value: 'cardsinhand', label: 'Card Counter' },
              { value: 'mirror', label: 'M!rror r0rriM' },
            ]}
          />
        </p>
      </>
    )
  }
}
