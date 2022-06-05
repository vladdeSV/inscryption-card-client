import React from 'react'

type Props<T extends string> = {
  onOptionChange?: (id: T) => void,
  uniqueName: string,
  title?: string,
  options: {
    id: T,
    label: string,
    content?: JSX.Element,
    enabled?: boolean,
  }[]
}
type State<T extends string> = {
  selected: T | undefined,
}

export class RadioOptions<T extends string> extends React.Component<Props<T>, State<T>> {
  constructor(props: Props<T>) {
    super(props)
    this.state = {
      selected: props.options[0]?.id,
    }
  }

  onOptionChange(id: T) {
    this.setState({ selected: id }, () => {
      if (this.props.onOptionChange) {
        this.props.onOptionChange(id)
      }
    })
  }

  render() {
    return (
      <fieldset className="radio-options">
        {this.props.title && <legend>{this.props.title}</legend>}
        {this.props.options.map(option => (
          <label className='radio' key={option.id}>
            <input
              type="radio"
              value={option.id}
              name={this.props.uniqueName}
              checked={this.state.selected === option.id}
              onChange={() => this.onOptionChange(option.id)}
              disabled={!(option.enabled ?? true)}
            />
            <div className="content" onClick={() => (option.enabled ?? true) && this.onOptionChange(option.id)}>
              {option.label}
              {option.content}
            </div>
          </label>
        ))}
      </fieldset>
    )
  }
}
