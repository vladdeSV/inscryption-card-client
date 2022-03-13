import React from 'react';

type Props = { onValueChange: (name: string) => void }
export default class NameSelect extends React.Component<Props> {
  render = () => (<input type='text' onChange={e => this.props.onValueChange(e.target.value)} />)
}

/*
type Locale = 'default' | 'jp' | 'ko' | 'zh-cn' | 'zh-tw'

const locales: { locale: Locale, displayName: string }[] = [
  { locale: 'default', displayName: 'Default' }, // (en, pt-br, fr, de, it, ru, es, tk)
  { locale: 'jp', displayName: '日本語' }, // (jp)
  { locale: 'ko', displayName: '한국어' }, // (ko)
  { locale: 'zh-cn', displayName: '中国文' }, // (zh-cn)
  { locale: 'zh-tw', displayName: '中國文' }, // (zh-tw)
]
*/
