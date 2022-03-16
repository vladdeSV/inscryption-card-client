import React from 'react';
import CheckboxGroup from '../checkboxGroup';

type Props = { onValueChange: (fused: boolean, golden: boolean, squid: boolean) => void }
type State = {
  fused: boolean,
  golden: boolean,
  squid: boolean,
}
export default class Flags extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      fused: false,
      golden: false,
      squid: false,
    }
  }

  private onUpdate() {
    this.props.onValueChange(this.state.fused, this.state.golden, this.state.squid)
  }

  render() {
    return (<CheckboxGroup
      options={[
        { value: 'fused', label: 'Fused' },
        { value: 'golden', label: 'Golden' },
        { value: 'squid', label: 'Squid' },
      ]}
      onUpdate={opts => {
        const selected = opts.filter(opt => opt.checked).map(opt => opt.value)
        this.setState({
          fused: selected.includes('fused'),
          golden: selected.includes('golden'),
          squid: selected.includes('squid'),
        }, this.onUpdate)
      }}
    />)
  }
}
