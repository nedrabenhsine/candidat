import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';

import condidacy from './pages/condidacy';
import Job from './pages/job/Job';

function App() {
  console.log("condidat");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/job' component={Job} />
          <Route path='/condidacy' component={condidacy} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
