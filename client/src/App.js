import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Practice from './pages/practice';
import Profile from './pages/profile';
import Logout from './pages/logout';
import QuestionList from './components/QuestionList';
import addQuestion from './components/addQuestion';
import GetQuestions from './components/GetQuestions';
import input_box from './components/Question/input_box';

import Addition from './pages/addition';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/practice' component={Practice} />
        <Route path='/profile' component={Profile} />
        <Route path='/logout' component={Logout} />
        <Route path='/list'  component={QuestionList}/>
        <Route path='/add'  component={addQuestion}/>
        <Route path='/getQuestions' component={GetQuestions}/>
        <Route path='/addition' component={Addition}/>
        <Route path='/testpage' component={input_box}/>
      </Switch>
    </Router>
  );
}

export default App;