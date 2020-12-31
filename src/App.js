import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './Components/Header';
import Game from './Components/Game';

function App() {
  return (
    <div className="App" >
      <Header />
      <Game />
      <GlobalStyles />
    </div>
  );
}

export default App;