import React from 'react';
import { blobTo64 } from '../../helpers';

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
    const uploadButton = (label: JSX.Element, onChange: (data64: string) => void) => (
      <label>
        {label}
        <input type='file' onChange={
          e => {
            const blob = e.target.files?.[0];
            if (blob) { blobTo64(blob).then(onChange) }
          }
        } />
      </label>
    )

    return (
      <>
        {uploadButton(<span>Common portrait <small>(114×94 px)</small></span>, (data) => this.setState({ common: data }, this.onUpdate))}
        {uploadButton(<span>Pixel portrait <small>(41×28 px)</small></span>, (data) => this.setState({ gbc: data }, this.onUpdate))}
      </>
    )
  }
}
