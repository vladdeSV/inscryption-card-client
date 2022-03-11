import React from 'react';

export default class HealthSelect extends React.Component<{ onValueChange: (value: number) => void }, { type: 'power' | 'staticon' }> {

  constructor(props: { onValueChange: (value: number) => void }) {
    super(props)
    this.state = { type: 'power' }
  }

  render() {
    return (
      <section>
        <p>health</p>
        <input type='number' defaultValue={1} onChange={(e) => this.props.onValueChange(Number(e.target.value))} />
      </section>
    )
  }
}
