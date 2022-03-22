import React from 'react'

type Option<T> = {
  value: T,
  label: string | JSX.Element,
  checked?: boolean,
}
type CheckboxGroupProps<T> = {
  options: Option<T>[],
  onUpdate: (options: Required<Option<T>>[]) => void,
  enabled?: boolean,
}
type CheckboxGroupState<T> = {
  options: Required<Option<T>>[]
}

class CheckboxGroup<T extends string | number> extends React.Component<CheckboxGroupProps<T>, CheckboxGroupState<T>> {

  constructor(props: CheckboxGroupProps<T>) {
    super(props)

    // explicit checked
    const options = props.options.map(o => ({ ...o, checked: o.checked ?? false }))
    this.state = { options }
  }

  render = () => <>{this.state.options.map(this.checkbox)}</>

  private updateCheckbox(index: number, checked: boolean) {
    this.setState(
      (state) => { state.options[index].checked = checked; return state },
      () => this.props.onUpdate(this.state.options)
    )
  }

  private checkbox = (option: Required<Option<T>>, index: number) => (
    <label key={index} className='checkbox'>
      <input disabled={this.props.enabled !== undefined ? !this.props.enabled : false} type="checkbox" checked={option.checked} value={option.value} onChange={e => this.updateCheckbox(index, e.target.checked)} />
      {option.label}
    </label>
  )
}

export default CheckboxGroup
