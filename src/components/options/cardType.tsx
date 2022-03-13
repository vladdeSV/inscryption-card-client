import React from 'react';
import CheckboxGroup from '../checkboxGroup';

type Props = { onValueChange: (value: State) => void }
type State = { type: string, terrain: boolean, rare: boolean, }
export default class CardTypeSelect extends React.Component<Props, State> {

  private onUpdate() {
    this.props.onValueChange(this.state)
  }

  render() {
    return (
      <>
        <select onChange={(e) => this.setState({ type: e.target.value }, this.onUpdate)}>
          <option value="common">Default</option>
          <option value="rare">Rare</option>
          <option value="terrain">Terrain</option>
        </select>
        {/* <CheckboxGroup options={[
          { value: 'terrain', label: 'Terrain' },
          { value: 'rare', label: 'Rare' },
        ]} onUpdate={opts => this.setState({ terrain: opts[0].checked, rare: opts[1].checked }, this.onUpdate)} /> */}
      </>
    )
  }
}
