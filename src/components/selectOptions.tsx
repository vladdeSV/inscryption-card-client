import React from "react";

export type Option<T> = {
  value: T,
  label: string | JSX.Element,
}

type Foo<T> = {
  options: Option<T>[]
  groups?: undefined
} | {
  options?: undefined
  groups: {
    name: string,
    options: Option<T>[]
  }[]
}
type Props<T> = {
  uniqueName: string,
  disabled?: boolean,
  onChange: (value: T) => void
} & Foo<T>

export default class SelectOptions<T extends string> extends React.Component<Props<T>> {
  render() {
    return (
      <select name={this.props.uniqueName} disabled={this.props.disabled} onChange={e => this.props.onChange(e.target.value as T /* HACK! but will always be T*/)}>

        {this.props.groups
          ? this.props.groups.map(group => (
            <optgroup key={group.name} label={group.name}>
              {group.options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
            </optgroup>
          ))
          : this.props.options.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
      </select>
    )
  }
}
