import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Practice from './pages/practice';
import Profile from './pages/profile';
import Logout from './pages/logout';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/practice' component={Practice} />
        <Route path='/profile' component={Profile} />
        <Route path='/log-out' component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;