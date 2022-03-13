import React from 'react';

type Props = {
  onValueChange: (value: { type: 'power', value: number } | { type: 'staticon', value: string }) => void,
}
type State = {
  selected: 'power' | 'staticon',
  power: number,
  staticon: string,
}
export default class PowerSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { selected: 'power', power: 0, staticon: 'ants' }
  }

  private onChange() {

    const value = this.state.selected === 'power' ? { type: 'power' as const, value: this.state.power } : { type: 'staticon' as const, value: this.state.staticon }

    this.props.onValueChange(value)
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
          <select disabled={this.state.selected !== 'staticon'} onChange={e => this.setState({ staticon: e.target.value }, this.onChange)}>
            <option value="ants">Ants</option>
            <option value="bell">Bell Ringer</option>
            <option value="cardsinhand">Card Counter</option>
            <option value="mirror">M!rror r0rriM</option>
          </select>
        </p>
      </>
    )
  }
}
