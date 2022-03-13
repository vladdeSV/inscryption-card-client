import React from 'react';
type Locale = 'default' | 'jp' | 'ko' | 'zh-cn' | 'zh-tw'

type State = { name: string, locale: string }
type Props = { onValueChange: (value: State) => void }
export default class NameSelect extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      locale: 'default',
    }
  }

  render() {
    const locales: { locale: Locale, displayName: string }[] = [
      { locale: 'default', displayName: 'Default' }, // (en, pt-br, fr, de, it, ru, es, tk)
      { locale: 'jp', displayName: '日本語' }, // (jp)
      { locale: 'ko', displayName: '한국어' }, // (ko)
      { locale: 'zh-cn', displayName: '中国文' }, // (zh-cn)
      { locale: 'zh-tw', displayName: '中國文' }, // (zh-tw)
    ]

    return (
      <div className='name-selection'>
        <input type='text' onChange={e => this.setState({ name: e.target.value }, this.onUpdate)} />
        <select className="name-locale" onChange={e => this.setState({ locale: e.target.value }, this.onUpdate)}>
          {locales.map(locale => <option key={locale.locale} value={locale.locale}>{locale.displayName}</option>)}
        </select>
      </div>
    )
  }

  private onUpdate() {
    this.props.onValueChange(this.state)
  }
}
