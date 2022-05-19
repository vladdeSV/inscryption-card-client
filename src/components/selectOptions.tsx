import React from "react";

export type Option<T> = {
  value: T,
  label: string | JSX.Element,
  enabled?: boolean,
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
    const option = (opt: Option<T>, index: number) => <option key={index} disabled={!(opt.enabled ?? true)} value={opt.value}>{opt.label}</option>

    return (
      <select name={this.props.uniqueName} disabled={this.props.disabled} onChange={e => this.props.onChange(e.target.value as T /* HACK! but will always be T*/)}>
        {this.props.groups
          ? this.props.groups.map(group => <optgroup key={group.name} label={group.name}>{group.options.map(option)}</optgroup>)
          : this.props.options.map(option)}
      </select>
    )
  }
}
