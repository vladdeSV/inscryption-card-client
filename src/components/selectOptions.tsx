import React from "react";

export type Option<T> = {
  value: T,
  label: string | JSX.Element,
}

type Props<T> = {
  uniqueName: string,
  disabled?: boolean,
  onChange: (value: T) => void
  options: Option<T>[]
}
export default class SelectOptions<T extends string> extends React.Component<Props<T>> {
  render() {
    return (
      <select name={this.props.uniqueName} disabled={this.props.disabled} onChange={e => this.props.onChange(e.target.value as T /* HACK! but will always be T*/)}>
        {this.props.options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
      </select>
    )
  }
}
