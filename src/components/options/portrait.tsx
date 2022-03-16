import React from 'react';
import FileUpload from '../fileUpload';

type Props = {
  onValueChange: (common?: string, gbc?: string) => void
}
type State = {
  common?: string,
  gbc?: string,
}
export default class Portrait extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  private onUpdate() {
    this.props.onValueChange(this.state.common, this.state.gbc)
  }

  render() {
    return (
      <>
        <FileUpload label={<span>Common portrait <small>(114×94 px)</small></span>} onUpdate={data => this.setState({ common: data }, this.onUpdate)} />
        <FileUpload label={<span>Pixel portrait <small>(41×28 px)</small></span>} onUpdate={data => this.setState({ gbc: data }, this.onUpdate)} />
      </>
    )
  }
}
