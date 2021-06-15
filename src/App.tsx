import React, { useState } from 'react';
import './Styles/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landingpage from './Page/Landingpage';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/">
          <Landingpage></Landingpage>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
