import React, { Component } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

export default class subTopicPage extends Component{


    constructor(props) {
        super(props);
        this.state = { grade: '2' , topics: [], questions: []};
    }

    
    componentDidMount() {
        let ques = [];
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                ques = res.data
                ques = ques.filter(question =>question.gradeLevel === this.state.grade);
                ques = ques.map(a => a.topic);
                this.setState({ topics: ques });

               // console.log(ques);
            })
            .catch(function (error) {
                console.log(error);
            })
            return ques;
    };

    render(){
        return (
        <>
        <Banner text="Practice" color='#4CAF50'></Banner>
        
        <div style={{margin:'0 20%'}}>
      {console.log(this.state.topics)}
{this.state.topics.map((value,index)=> {
                return <Subject text={value} color='#F39317'></Subject>
            })}
        </div>
            </>
    )
    }
}
