import React from 'react';
import CheckboxGroup from '../../checkboxGroup';

export type Tribe = 'bird' | 'canine' | 'hooved' | 'reptile' | 'insect'

export default class TribesSelect extends React.Component<{ onValueChange: (value: Tribe[]) => void }> {

  render() {
    const options: { value: Tribe, label: string }[] = [
      { value: 'bird', label: 'Feathered' },
      { value: 'canine', label: 'Canine' },
      { value: 'hooved', label: 'Hooved' },
      { value: 'reptile', label: 'Reptilian' },
      { value: 'insect', label: 'Insectoid' },
    ]

    return (<CheckboxGroup options={options} onUpdate={opts => this.props.onValueChange(opts.filter(opt => opt.checked).map(opt => opt.value))} />)
  }
}
