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
import topicPage from './pages/topicPage';
import subtopicPage from './pages/subtopicPage';
import testing from './pages/testing';



function App() {
  let topicName = 'addition';
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/practice' component={Practice} />
        <Route path='/profile' component={Profile} />
        <Route path='/log-out' component={Logout} />
        <Route path='/list'  component={QuestionList}/>
        <Route path='/add'  component={addQuestion}/>
        <Route path='/getQuestions' component={GetQuestions}/>
       
        <Route path='/topics' component= {topicPage}/>
        <Route path='/testing' element= {testing(topicName)}/>
        <Route path='/subtopics' component= {subtopicPage}/>
      </Switch>
    </Router>
  );
}

export default App;
