import React from 'react';

type Props = { onValueChange: (value: string | undefined) => void }
export default class NameSelect extends React.Component<Props> {
  render = () => <input type='text' onChange={e => this.props.onValueChange(e.target.value || undefined)} />
}
