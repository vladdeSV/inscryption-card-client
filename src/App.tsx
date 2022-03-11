import React from 'react';
import './App.css';
import CardGenerator from './modals/cardGenerator';

class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <CardGenerator />
      </main>
    );
  }
}

export default App;
