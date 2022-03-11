import React from 'react';

type Tribes = 'bird' | 'canine' | 'hooved' | 'reptile' | 'insect'

export default class TribesSelect extends React.Component<{ onValueChange: (value: string[]) => void }, { tribes: Record<Tribes, boolean> }> {

  constructor(props: any) {
    super(props)
    this.state = { tribes: { bird: false, canine: false, hooved: false, insect: false, reptile: false } }
  }

  render() {
    const onCheckboxUpdate = (id: Tribes, checked: boolean) => {
      const tribes = this.state.tribes
      tribes[id] = checked
      this.setState({ tribes }, () => {
        const tribes = Object.entries(this.state.tribes)
          .filter(tribe => !!tribe[1])
          .map(tribe => tribe[0])
        this.props.onValueChange(tribes)
      })
    }

    return (
      <section>
        <p>tribes</p>
        <div>
          <input id='tribe-bird' type='checkbox' onChange={e => onCheckboxUpdate('bird', (e.target.checked))} />
          <label htmlFor="tribe-bird">Feathered</label>

          <input id='tribe-canine' type='checkbox' onChange={e => onCheckboxUpdate('canine', (e.target.checked))} />
          <label htmlFor="tribe-canine">Canine</label>

          <input id='tribe-hooved' type='checkbox' onChange={e => onCheckboxUpdate('hooved', (e.target.checked))} />
          <label htmlFor="tribe-hooved">Hooved</label>

          <input id='tribe-reptile' type='checkbox' onChange={e => onCheckboxUpdate('reptile', (e.target.checked))} />
          <label htmlFor="tribe-reptile">Reptilian</label>

          <input id='tribe-insect' type='checkbox' onChange={e => onCheckboxUpdate('insect', (e.target.checked))} />
          <label htmlFor="tribe-insect">Insectoid</label>
        </div>
      </section>
    )
  }
}
