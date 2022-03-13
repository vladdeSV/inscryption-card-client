import React from 'react';

export default class NameSelect extends React.Component<{ onValueChange: (name: string) => void }> {
  render = () => (<input type='text' onChange={e => this.props.onValueChange(e.target.value)} />)
}
