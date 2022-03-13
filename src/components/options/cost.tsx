import React from 'react';
import CheckboxGroup from '../checkboxGroup';

type CostData = { type: 'blood' | 'bone', amount: number } | { type: 'gem', gems: ('orange' | 'green' | 'blue')[] }
type Props = { onValueChange: (value: CostData | undefined) => void }
type State = {
  selected?: 'blood' | 'bone' | 'gem',
  blood: number,
  bone: number,
  gems: ('orange' | 'green' | 'blue')[],
}

export default class CostSelect extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = { selected: undefined, blood: 1, bone: 1, gems: [] }
  }

  private onUpdate() {
    const data: CostData | undefined = ((state) => {
      switch (state.selected) {
        case undefined:
          return undefined
        case 'blood':
          return { type: 'blood', amount: state.blood }
        case 'bone':
          return { type: 'bone', amount: state.bone }
        case 'gem':
          return { type: 'gem', gems: state.gems }
      }
    })(this.state);

    this.props.onValueChange(data)
  }

  render() {
    return (
      <>
        <p>
          <label>
            <input type='radio' name='cost' defaultChecked={true} onClick={() => this.setState({ selected: undefined }, () => this.onUpdate())} />
            None
          </label>
        </p>
        <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'blood' }, () => this.onUpdate())} />
            Blood
            <input type="number" min={1} max={4} defaultValue={1} disabled={this.state.selected !== 'blood'} onChange={e => this.setState({ blood: Number(e.target.value) }, () => this.onUpdate())} />
          </label>
        </p>
        <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'bone' }, () => this.onUpdate())} />
            Bone
            <input type="number" min={1} max={10} defaultValue={1} disabled={this.state.selected !== 'bone'} onChange={e => this.setState({ bone: Number(e.target.value) }, () => this.onUpdate())} />
          </label>
        </p>
        {/* <p>
          <label>
            <input type='radio' name='cost' onClick={() => this.setState({ selected: 'gem' }, () => this.onUpdate())} />
            Gems
            <CheckboxGroup onUpdate={opts => this.setState({ gems: opts.filter(opt => opt.checked).map(opt => opt.value) }, () => this.onUpdate())} options={[
              { label: 'Orange', value: 'orange' },
              { label: 'Green', value: 'green' },
              { label: 'Blue', value: 'blue' },
            ]} />
          </label>
        </p> */}
      </>
    )
  }
}
