import React from 'react'
import CheckboxGroup from '../checkboxGroup'
import Section from '../menuSection'
import SelectOptions from '../selectOptions'

export type Locale = 'default' | 'jp' | 'ko' | 'zh-cn' | 'zh-tw'
export type Meta = {
  act: 'leshy' | 'gbc' | 'p03' | 'pixelprofilgate',
  border: boolean
  scanline: boolean,
  locale: Locale,
}
type Props = { onMetaUpdate: (meta: Meta) => void, useLocale?: boolean }

export default class CardGeneratorMeta extends React.Component<Props, Meta> {
  constructor(props: Props) {
    super(props)
    this.state = {
      act: 'leshy',
      border: false,
      scanline: false,
      locale: 'default',
    }
  }

  render() {
    return (
      <section id="meta">
        <Section title='Style'>
          <SelectOptions
            uniqueName='act'
            onChange={value => this.setState({ act: value }, this.onUpdate)}
            groups={[
              {
                name: 'In-game', options: [
                  { value: 'leshy', label: 'Leshy (act 1)' },
                  { value: 'gbc', label: 'GBC (act 2)' },
                  { value: 'p03', label: 'P03 (act 3)' },
                ]
              },
              {
                name: 'Community', options: [
                  { value: 'pixelprofilgate', label: 'Pixel Profilgate' },
                ]
              }
            ]}
          />
        </Section>
        {this.props.useLocale ?? true ? (
          <Section title='Locale' help='For languages with non-latin characters like Korean, Japanese, and Chinese'>
            <SelectOptions
              uniqueName='locale'
              onChange={locale => this.setState({ locale: locale }, this.onUpdate)}
              options={[
                { value: 'default', label: 'Default' }, // (en, pt-br, fr, de, it, ru, es, tk)
                { value: 'jp', label: '日本語' }, // (jp)
                { value: 'ko', label: '한국어' }, // (ko)
                { value: 'zh-cn', label: '中国文' }, // (zh-cn)
                { value: 'zh-tw', label: '中國文' }, // (zh-tw)
              ]}
            />
          </Section>) : undefined}
        <Section title='Misc.'>
          <CheckboxGroup
            options={[
              { label: 'Border', value: 'border' },
              { label: 'Scanline', value: 'scanline', checked: true }
            ]}
            onUpdate={opts => {
              const selected = opts.filter(opt => opt.checked).map(opt => opt.value)
              this.setState({ border: selected.includes('border'), scanline: selected.includes('scanline') }, this.onUpdate)
            }}
          />
        </Section>
      </section >
    )
  }

  private onUpdate() {
    this.props.onMetaUpdate(this.state)
  }
}
