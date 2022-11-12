import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/generators/front';
import Credits from './modals/credits';
import { SlideModal } from './modals/slide';
import OtherCardGenerator from './modals/generators/other';
import { Help } from './modals/help';

class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <h1>🎊✨ LeshyIRL 💍 Katy ✨🎉</h1>
        <SlideModal options={[['Frontside', 'Otherside'], ['Help', 'Credits']]}>
          <FrontCardGenerator />
          <OtherCardGenerator />
          <Help />
          <Credits />
        </SlideModal>
      </main>
    );
  }
}

export default App;
