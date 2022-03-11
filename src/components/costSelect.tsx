import React from 'react';

type CostBlood = {
  type: 'blood',
  amount: number,
}
type CostBone = {
  type: 'bone',
  amount: number,
}
type Cost = CostBlood | CostBone
type CostType = Cost['type']

export default class CostSelect extends React.Component<{ onValueChange: (value: Cost | undefined) => void }, { type: CostType | undefined }> {

  constructor(props: any) {
    super(props)
    this.state = { type: undefined }
  }

  render() {
    return (
      <section>
        <p>cost</p>
        <div>
          <p>
            <input id='cost-none' type='radio' name='cost' defaultChecked={true} onClick={() => this.setState({ type: undefined })} />
            <label htmlFor='cost-none'>None</label>
          </p>
          <p>
            <input id='cost-blood' type='radio' name='cost' onClick={() => this.setState({ type: 'blood' })} />
            <label htmlFor='cost-blood'>Blood</label>
            <input type="number" min={0} max={4} disabled={this.state.type !== 'blood'} defaultValue={0} onChange={e => this.props.onValueChange({ type: 'blood', amount: Number(e.target.value) })} />
          </p>
          <p>
            <input id='cost-bone' type='radio' name='cost' onClick={() => this.setState({ type: 'bone' })} />
            <label htmlFor='cost-bone'>Bone</label>
            <input type="number" min={0} max={10} disabled={this.state.type !== 'bone'} defaultValue={0} onChange={e => this.props.onValueChange({ type: 'bone', amount: Number(e.target.value) })} />
          </p>
        </div>

      </section>
    )
  }
}
