import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Game from './Components/Game';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" >
      <Router>

        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            <Game />
          </Route>
        </Switch>

      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;