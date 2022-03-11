import React from 'react';

export default class CardTypeSelect extends React.Component<{ onValueChange: (value: string) => void }> {
  render() {
    return (
      <section>
        <p>card type</p>
        <select onChange={(e) => this.props.onValueChange(e.target.value)}>
          <option value="common">Default</option>
          <option value="rare">Rare</option>
          <option value="terrain">Terrain</option>
        </select>
      </section>
    )
  }
}
