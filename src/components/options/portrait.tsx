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
    return (
      <>
        <label>
          Common portrait <small>(114×94 px)</small>
          <input type='file' onChange={
            e => {
              const blob = e.target.files?.[0];
              if (blob) {
                blobTo64(blob).then(data => this.setState({ common: data }, this.onUpdate))
              }
            }
          } />
        </label>
      </>
    )
  }
}
