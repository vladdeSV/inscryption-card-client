import React from 'react';
import './App.css';
import FrontCardGenerator from './modals/generators/front';
import Credits from './modals/credits';
import { SlideModal } from './modals/slide';
import OtherCardGenerator from './modals/generators/other';

class App extends React.Component {
  render() {
    return (
      <main className='app'>
        <h1>Inscryption card generator</h1>
        <SlideModal options={[['Frontside', 'Otherside'], ['Credits']]}>
          <FrontCardGenerator />
          <OtherCardGenerator />
          <Credits />
        </SlideModal>
      </main>
    );
  }
}

export default App;
