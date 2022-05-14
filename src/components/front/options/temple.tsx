import React from 'react';
import SelectOptions from '../../selectOptions';

export type TempleType = 'nature' | 'tech' | 'undead' | 'wizard'
type Props = { onValueChange: (temple: TempleType) => void }
export default class Temple extends React.Component<Props> {
  render() {
    return (
      <SelectOptions
        uniqueName='temple'
        onChange={value => this.props.onValueChange(value)}
        options={[
          { value: 'nature', label: 'Nature' },
          { value: 'tech', label: 'Tech' },
          { value: 'undead', label: 'Undead' },
          { value: 'wizard', label: 'Wizard' },
        ]}
      />
    )
  }
}
