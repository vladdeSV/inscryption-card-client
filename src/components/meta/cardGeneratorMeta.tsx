import React from 'react'

export type Meta = {
  act: 'leshy' | 'gbc' | string,
  locale: 'default' | 'jp' | 'ko' | 'zh-cn' | 'zh-tw' | string,
  border: boolean
}
type Props = { onMetaUpdate: (meta: Meta) => void }

export default class CardGeneratorMeta extends React.Component<Props, Meta> {
  constructor(props: Props) {
    super(props)
    this.state = {
      act: 'leshy',
      locale: 'default',
      border: false,
    }
  }

  render() {
    const locales: { locale: Meta['locale'], displayName: string }[] = [
      { locale: 'default', displayName: 'Default (en, pt-br, fr, de, it, ru, es, tk)' },
      { locale: 'jp', displayName: '日本語 (jp)' },
      { locale: 'ko', displayName: '한국어 (ko)' },
      { locale: 'zh-cn', displayName: '中国文 (zh-cn)' },
      { locale: 'zh-tw', displayName: '中國文 (zh-cn)' },
    ]

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
          <label htmlFor="name-locale">locale</label>
          <select id="name-locale" onChange={e => this.setState({ locale: e.target.value }, () => this.props.onMetaUpdate(this.state))}>
            {locales.map(locale => <option key={locale.locale} value={locale.locale}>{locale.displayName}</option>)}
          </select>
        </p>
      </section>
    )
  }
}
