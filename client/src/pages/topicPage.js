import React from 'react'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'
import { Component, Button } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios';

export default class topicPage extends Component{


    constructor(props){
        super(props);
        this.state = {
            grade: '2', topic: '', topicList: [], subtopics: []
        };
    }

    //retrieve list of topics from database
    /***** Create function to get unique values of topic/subtopic list ******/
    /*componentDidMount() {
       // console.log('this.state.topicList');
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
            let topics = res.data.topic; 
               this.setState({ topicList: topics });
                console.log('this.state.topicList');
                console.log(topics);
            })
            .catch(function (error) {
                console.log(error);
            })
    };*/

    componentDidMount() {
        console.log('hello');
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                //let questions = res.data;
               //questions = questions.map(a => a.topic);
               this.setState({topicList: res.data.map(a => a.topic)});
            })
            .catch( function (error) {
                console.log(error);
            })
    }

    onTopicClick = ({topic}) => {
        this.setState({
          topic: this.state.topic
        });
        console.log("ontopic click");
        console.log(this.state.topic);
     //   return <Redirect to={'/subtopic'} />
      };
    
    //   ={() => {
    //     useHistory().push('/subtopicPage')
        
    //     }}

    render() {
    return (
        
        <>
            <Banner text="Practice" color='#4CAF50'></Banner>
            <div style={{margin:'0 20%'}}>
                {this.state.topicList.map(topic=> {
                return <Button onClick = {this.onTopicClick(topic)}>
                    <Subject text={topic} color='#F39317'></Subject>
                    hello
                    </Button>
            })}
            </div>
            <div style={{clear: 'both', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <h1>Practice</h1>
            </div>
        </>
    )
    }
}
