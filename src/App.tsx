import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/cardGenerator';
import BackCardGenerator from './modals/backCardGenerator';

import { Children } from 'react'
type ModalProps = {
  options: string[]
}
type ModalState = {
  selectedIndex: number
}
class SlideModal extends React.Component<ModalProps, ModalState> {
  // constuctor
  constructor(props: ModalProps) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  movePane(way: 'prev' | 'next') {
    const c = Children.count(this.props.children)
    console.log(c)
    const index = Math.max(0, Math.min(c - 1, this.state.selectedIndex + (way === 'prev' ? -1 : 1)))
    this.setState({ selectedIndex: index })
  }

  render() {
    return (
      <>
        <style>
          {`.generator>article { transform: translate(${-this.state.selectedIndex * 100}%); }`}
        </style>
        <nav className='foo'>
          {this.props.options.map((option, index) => (
            <button className={(this.state.selectedIndex === index ? 'selected' : '')} key={index} onClick={() => this.setState({ selectedIndex: index })}>{option}</button>
          ))}
        </nav>
        <main className='generator'>
          {this.props.children}
        </main>
      </>
    )
  }
}

class App extends React.Component {

  render() {

    return (
      <main className='app'>
        <h1>Inscryption card generator</h1>
        <SlideModal options={['Frontside', 'Backside']}>
          <FrontCardGenerator />
          <BackCardGenerator />
        </SlideModal>
      </main>
    );
  }
}

export default App;
