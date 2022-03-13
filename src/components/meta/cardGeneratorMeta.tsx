import React from 'react'

export type Meta = {
  act: 'leshy' | 'gbc' | string,
  border: boolean
}
type Props = { onMetaUpdate: (meta: Meta) => void }

export default class CardGeneratorMeta extends React.Component<Props, Meta> {
  constructor(props: Props) {
    super(props)
    this.state = {
      act: 'leshy',
      border: false,
    }
  }

  render() {
    return (
      <section id="meta">
        <p>
          <select onChange={e => this.setState({ act: e.target.value }, () => this.props.onMetaUpdate(this.state))}>
            <option value="leshy">Act 1</option>
            <option value="gbc">Act 2</option>
          </select>
        </p>
        <p>
          bordered: <input type="checkbox" onChange={e => this.setState({ border: e.target.checked }, () => this.props.onMetaUpdate(this.state))} />
        </p>
        <p>

        </p>
      </section>
    )
  }
}
