import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/cardGenerator';
import BackCardGenerator from './modals/backCardGenerator';

type ModalProps = {
}
type ModalState = {
  selectedIndex: number
}
class SlideModal extends React.Component<ModalProps, ModalState> {
  // constuctor
  constructor(props: {}) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  movePane(way: 'prev' | 'next') {
    this.setState(state => ({ selectedIndex: state.selectedIndex + (way === 'next' ? 1 : -1) }))
  }

  render() {
    return (
      <>
        <style>
          {`.generator>article { transform: translate(${-this.state.selectedIndex * 100}%); }`}
        </style>
        <div>
          <button onClick={() => this.setState(state => ({ selectedIndex: state.selectedIndex - 1 }))}>dec</button>
          <button onClick={() => this.setState(state => ({ selectedIndex: state.selectedIndex + 1 }))}>inc</button>
        </div>
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
        <SlideModal>
          <FrontCardGenerator />
        </SlideModal>
      </main>
    );
  }
}

export default App;
