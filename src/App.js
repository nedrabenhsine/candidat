import React from 'react';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Condidacy from './pages/Condidacy';
import Profile from './pages/Profile/index';
import Job from './pages/job/Job';
import Login from './pages/Login/index';
import Signup from './pages/signup';
function App() {
  const userToken = localStorage.getItem('token');

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/job' element={<Job />} />
          <Route path='/condidacy' element={<Condidacy />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
