import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/cardGenerator';
import BackCardGenerator from './modals/backCardGenerator';

type ModalProps = {
}
type ModalState = {
  selectedIndex: number
}
class GeneratorModal extends React.Component<ModalProps, ModalState> {
  // constuctor
  constructor(props: {}) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    return (
      <main className='generator'>
        {this.props.children}
      </main>
    )
  }
}

class App extends React.Component {

  render() {

    return (
      <main className='app'>
        <h1>Inscryption card generator</h1>
        <style>
          {`
            .generator>article {
              transform: translate(-${0 * 100}%);
            }
          `}
        </style>
        <GeneratorModal>
          <FrontCardGenerator />
        </GeneratorModal>
      </main>
    );
  }
}

export default App;
