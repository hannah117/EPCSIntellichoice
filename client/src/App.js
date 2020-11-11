import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from './components/QuestionList';
import addQuestion from './components/addQuestion';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
    
      <Route path="/list"  component={QuestionList}/>
       <Route path="/add"  component={addQuestion}/>
       </div>
      </Router>
      
    );
  };
}

export default App;
