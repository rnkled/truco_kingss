import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './Components/Header';
import Game from './Components/Game';
import Home from './Components/Home';
import Login from './Components/Login';
import Join from './Components/Join';

function App() {
  return (
    <div className="App" >
      <Router>

        <Header />

        <Switch>
          <Route path="/" exact>
            <Redirect to='/home' />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            <Game />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/join" exact>
            <Join />
          </Route>
        </Switch>

      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;