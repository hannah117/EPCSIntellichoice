import React, { Component } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'
import topicPage from './topicPage'

export default class subtopicPage extends topicPage{
    
    componentDidMount() {
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                this.setState({ subtopics: res.data.subtopic });
                console.log(this.state.subtopics);
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    
    questionTableFiltered(grade, topic) {
        const ques = this.state.subtopics.filter(question => question.topic === this.state.topic && this.question.grade== grade);
        //this.setState.subtopics = ques;
        return (ques.map((data, i) => {
         this.setState((state,props) => {
             return {subtopics: ques}
        })}
        ))
        };

    
    //const numbers = [1, 2, 3, 4, 5];
    //const listItems = numbers.map((number) =>  <li>{​​number}​​</li>);

    render(){
        return (
        <>
        <Banner text="Practice" color='#4CAF50'></Banner>
        <div style={{margin:'0 20%'}}>
            {this.state.subtopics.map((value,index)=> {
                return <Subject text={value} color='#F39317'></Subject>
            })}
        </div>
            </>
    )
    }

}