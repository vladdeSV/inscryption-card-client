import React from "react";

type Props = { text: string }
export default class InfoCircle extends React.Component<Props> {
  render() {
    return (
      <span className="info-circle">
        🛈
        <span className="info">{this.props.text}</span>
      </span>
    )
  }
}
