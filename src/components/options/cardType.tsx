import React from 'react';
import SelectOptions from '../selectOptions';

export type CardType = 'common' | 'rare' | 'terrain'
type Props = { onValueChange: (rare: boolean, terrain: boolean, terrainLayout: boolean) => void }
type State = { type: 'common' | 'rare' | 'terrain' | 'rareterrain', ignoreTerrainLayout: boolean }
export default class CardTypeSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = { type: 'common', ignoreTerrainLayout: false }
  }

  render() {
    const disableTerrainLayoutOption = !this.state.type.includes('terrain')

    return (
      <>
        <SelectOptions
          uniqueName='cardtype'
          disabled={false}
          onChange={value => this.setState({ type: value }, this.onUpdate)}
          options={[
            { value: 'common', label: 'Default' },
            { value: 'rare', label: 'Rare' },
            { value: 'terrain', label: 'Terrain' },
            { value: 'rareterrain', label: 'Rare Terrain' },
          ]}
        />
        <label className={disableTerrainLayoutOption ? 'disabled' : ''}>
          <input type="checkbox" disabled={disableTerrainLayoutOption} checked={this.state.ignoreTerrainLayout && !disableTerrainLayoutOption} onChange={e => this.setState({ ignoreTerrainLayout: e.target.checked }, this.onUpdate)} />
          Ignore terrain layout
        </label>
      </>
    )
  }

  private onUpdate() {
    const rare = this.state.type.includes('rare')
    const terrain = this.state.type.includes('terrain')
    this.props.onValueChange(rare, terrain, !this.state.ignoreTerrainLayout)
  }
}
