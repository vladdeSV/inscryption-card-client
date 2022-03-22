import React from "react";
import FileUpload from "../../fileUpload";

export type CustomPortrait = {
  common?: string,
  gbc?: string,
}
type Props = {
  enabled: boolean,
  onUpdate: (customPortrait: CustomPortrait) => void,
}
export default class CustomPortraitSelect extends React.Component<Props, CustomPortrait> {

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  private onUpdate() {
    this.props.onUpdate(this.state)
  }

  render() {
    return (
      <>
        <h3>Custom</h3>
        <FileUpload enabled={this.props.enabled} label={<span>Common portrait <small>(114×94 px)</small></span>} onUpdate={data => this.setState({ common: data }, this.onUpdate)} />
        <FileUpload enabled={this.props.enabled} label={<span>Pixel portrait <small>(41×28 px)</small></span>} onUpdate={data => this.setState({ gbc: data }, this.onUpdate)} />
      </>
    )
  }
}
