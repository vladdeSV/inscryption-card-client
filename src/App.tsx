import React from 'react';
import './App.css';
import CardGenerator from './modals/cardGenerator';

class App extends React.Component {

  render() {

    return (
      <main className='app'>
        <h1>Inscryption card generator</h1>
        <h3>(testing automatic website deployment)</h3>
        <CardGenerator />
      </main>
    );
  }
}

export default App;
