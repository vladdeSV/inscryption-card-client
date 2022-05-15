import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/cardGenerator';
import BackCardGenerator from './modals/backCardGenerator';

class App extends React.Component {

  render() {

    return (
      <main className='app'>
        <h1>Inscryption card generator</h1>
        <FrontCardGenerator />
        <br />
        <br />
        <br />
        <br />
        <BackCardGenerator />
      </main>
    );
  }
}

export default App;
