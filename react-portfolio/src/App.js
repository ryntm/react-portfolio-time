import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

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
