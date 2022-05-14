import React from 'react';
import SelectOptions from '../../../selectOptions';

export type Deathcard = {
  head: 'chief' | 'enchantress' | 'gravedigger' | 'prospector' | 'robot' | 'settlerman' | 'settlerwoman' | 'wildling',
  mouth: number,
  eyes: number,
  lostEye: boolean,
}
type Props = {
  enabled: boolean,
  onUpdate: (deathcard: Deathcard) => void
}
export default class DeatchardPortraitSelect extends React.Component<Props, Deathcard> {

  constructor(props: Props) {
    super(props)
    this.state = {
      head: 'chief',
      eyes: 0,
      mouth: 0,
      lostEye: false,
    }
  }

  private onUpdate() {
    this.props.onUpdate(this.state)
  }

  render() {
    return (
      <>
        <h3>Deathcard</h3>
        <label>
          Head
          <SelectOptions<Deathcard['head']>
            options={[
              { value: 'chief', label: 'Chief' },
              { value: 'enchantress', label: 'Enchantress' },
              { value: 'gravedigger', label: 'Gravedigger' },
              { value: 'prospector', label: 'Prospector' },
              { value: 'robot', label: 'Robot' },
              { value: 'settlerman', label: 'Settlerman' },
              { value: 'settlerwoman', label: 'Settlerwoman' },
              { value: 'wildling', label: 'Wildling' },
            ]}
            uniqueName='custom-head'
            disabled={!this.props.enabled}
            onChange={value => this.setState({ head: value }, this.onUpdate)}
          />
        </label>
        <label>
          Eyes
          <SelectOptions
            options={[
              { value: '0', label: 'Variant 1' },
              { value: '1', label: 'Variant 2' },
              { value: '2', label: 'Variant 3' },
              { value: '3', label: 'Variant 4' },
              { value: '4', label: 'Variant 5' },
              { value: '5', label: 'Variant 6' },
            ]}
            uniqueName='custom-eyes'
            disabled={!this.props.enabled}
            onChange={value => this.setState({ eyes: Number(value) }, this.onUpdate)}
          />
          <label>
            <input type="checkbox" onChange={checked => this.setState({ lostEye: checked.target.checked }, this.onUpdate)} disabled={!this.props.enabled} />
            Lost eye
          </label>
        </label>
        <label>
          Mouth
          <SelectOptions
            options={[
              { value: '0', label: 'Variant 1' },
              { value: '1', label: 'Variant 2' },
              { value: '2', label: 'Variant 3' },
              { value: '3', label: 'Variant 4' },
              { value: '4', label: 'Variant 5' },
              { value: '5', label: 'Variant 6' },
            ]}
            uniqueName='custom-mouth'
            disabled={!this.props.enabled}
            onChange={value => this.setState({ mouth: Number(value) }, this.onUpdate)}
          />
        </label>
      </>
    )
  }
}
