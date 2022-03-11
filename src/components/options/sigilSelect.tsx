import React from 'react';



export default class SigilSelect extends React.Component<{ onValueChange: (sigils: string[]) => void }, { sigils: [string?, string?, string?] }> {
  constructor(props: any) {
    super(props)
    this.state = { sigils: [undefined, undefined, undefined] }
  }

  render() {

    const sigils: { id: string | undefined, name: string }[] = [
      { id: '', name: '-' },
      { id: 'allstrike', name: 'Moon Strike' },
      { id: 'beesonhit', name: 'Bees Within' },
      { id: 'buffneighbours', name: '(todo) buffneighbours' },
      { id: 'corpseeater', name: '(todo) corpseeater' },
      { id: 'createbells', name: '(todo) createbells' },
      { id: 'createdams', name: '(todo) createdams' },
      { id: 'deathtouch', name: '(todo) deathtouch' },
      { id: 'debuffenemy', name: '(todo) debuffenemy' },
      { id: 'drawant', name: '(todo) drawant' },
      { id: 'drawcopy', name: '(todo) drawcopy' },
      { id: 'drawcopyondeath', name: '(todo) drawcopyondeath' },
      { id: 'drawrabbits', name: '(todo) drawrabbits' },
      { id: 'drawrandomcardondeath', name: '(todo) drawrandomcardondeath' },
      { id: 'evolve', name: '(todo) evolve' },
      { id: 'flying', name: '(todo) flying' },
      { id: 'guarddog', name: '(todo) guarddog' },
      { id: 'icecube', name: '(todo) icecube' },
      { id: 'preventattack', name: '(todo) preventattack' },
      { id: 'quadruplebones', name: '(todo) quadruplebones' },
      { id: 'randomability', name: '(todo) randomability' },
      { id: 'randomconsumable', name: '(todo) randomconsumable' },
      { id: 'reach', name: '(todo) reach' },
      { id: 'sacrificial', name: '(todo) sacrificial' },
      { id: 'sharp', name: 'Sharp Quills' },
      { id: 'splitstrike', name: '(todo) splitstrike' },
      { id: 'squirrelorbit', name: '(todo) squirrelorbit' },
      { id: 'steeltrap', name: '(todo) steeltrap' },
      { id: 'strafe', name: '(todo) strafe' },
      { id: 'strafepush', name: '(todo) strafepush' },
      { id: 'submerge', name: '(todo) submerge' },
      { id: 'tailonhit', name: '(todo) tailonhit' },
      { id: 'tripleblood', name: '(todo) tripleblood' },
      { id: 'tristrike', name: '(todo) tristrike' },
      { id: 'tutor', name: '(todo) tutor' },
      { id: 'whackamole', name: '(todo) whackamole' },
    ]

    const onSigilChange = (n: number, sigil: string | undefined) => {
      const sigils = this.state.sigils;
      sigils[n] = sigil
      this.setState({ sigils }, () => {
        const sigils = this.state.sigils.filter(x => x).map(x => x!)
        this.props.onValueChange(sigils)
      })
    }

    const sigilSelect = (n: number) => (
      <select onChange={(e) => onSigilChange(n, e.target.value)}>
        {sigils.map(sigil => (<option key={`${n}-${sigil.id}`} value={sigil.id}>{sigil.name}</option>))}
      </select>
    )

    return (
      <section>
        <p>abilities</p>
        <div>
          {sigilSelect(1)}
          {sigilSelect(2)}
          {sigilSelect(3)}
        </div>
      </section>
    )
  }
}
