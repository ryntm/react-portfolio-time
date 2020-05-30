import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home.js';
import Portfolio from './pages/Portfolio/Portfolio.js';
import Contact from './pages/Contact/Contact.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/portfolio' component={Portfolio} />
          <Route exact path = '/contact' component={Contact} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
