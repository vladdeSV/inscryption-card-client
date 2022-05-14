import React from 'react';

export default class HealthSelect extends React.Component<{ onValueChange: (value: number) => void }> {
  render = () => (<input type='number' min={0} max={99} defaultValue={1} onChange={(e) => this.props.onValueChange(Number(e.target.value))} />)
}
