import React from 'react';

export default class PowerSelect extends React.Component<{ onValueChange: (value: { type: 'power', value: number } | { type: 'staticon', value: string }) => void }, { type: 'power' | 'staticon' }> {

  constructor(props: any) {
    super(props)
    this.state = { type: 'power' }
  }

  render() {
    return (
      <>
        <p>
          <input type='radio' defaultChecked={true} name='powertype' id="power-power" onClick={() => this.setState({ type: 'power' })} />
          <label htmlFor="power-power">Power</label>
          <input type="number" disabled={this.state.type !== 'power'} defaultValue={0} onChange={e => !e.target.disabled && this.props.onValueChange({ type: 'power', value: Number(e.target.value) })} />
        </p>
        <p>
          <input type='radio' name='powertype' id="power-staticon" onClick={() => this.setState({ type: 'staticon' })} />
          <label htmlFor="power-staticon">Stat Icon</label>
          <select disabled={this.state.type !== 'staticon'} onChange={e => !e.target.disabled && this.props.onValueChange({ type: 'staticon', value: e.target.value })}>
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
