import React from "react";

type Props = { text: string }
export default class InfoCircle extends React.Component<Props> {
  render = () => <span className="info-circle">ℹ️ <span className="info">{this.props.text}</span></span>
}
