import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/generators/front';
import BackCardGenerator from './modals/generators/back';
import { SlideModal } from './modals/slide';

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
