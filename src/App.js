import React from 'react';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import condidacy from './pages/condidacy';
import Job from './pages/job/Job';
import Login from './pages/Login/index';
import Signup from './pages/signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/job' element={<Job />} />
          <Route path='/condidacy' element={<condidacy />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Switch>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
