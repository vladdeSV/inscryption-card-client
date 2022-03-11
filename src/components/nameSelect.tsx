import React from 'react';

export default class NameSelect extends React.Component<{ onValueChange: (value: string | undefined) => void }, { current: string, locale: string }> {
  constructor(props: any) {
    super(props)
    this.state = { current: '', locale: 'en' }
  }

  render() {

    const locale = (
      <select>
        <option value="en">(en) English</option>
        <option value="jp">(jp) Japanese</option>
        <option value="ko">(ko) Korean</option>
      </select>
    )

    return (
      <section>
        <p>name</p>
        <input type='text' onChange={e => {
          this.setState({ current: e.target.value }, () => {
            this.props.onValueChange(this.state.current || undefined)
          })
        }} />
        {this.state.current.match(/[^\w ]/) && locale}
      </section>
    )
  }
}
