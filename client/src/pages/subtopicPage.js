import React, { Component } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'


export default class subTopicPage extends Component{
    constructor(props) {
        super(props);
        this.state = { 
                       //subtopics: this.props.location.state.subtopics, 
                       topic: this.props.location.state.topic,
                       grade: this.props.location.state.grade,
                        subtopics: []};
    }

    
    componentDidMount() {
        let ques = [];
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                console.log(this.state.topic);
                ques = res.data;
                ques = ques.filter(question =>question.gradeLevel === this.state.grade && question.topic === this.state.topic);
                ques = ques.map(a => a.subtopic);
                this.setState({ subtopics: ques });
               // console.log('hello');
               // console.log(ques);
            })
            .catch(function (error) {
                console.log(error);
            })
            return ques;
    };

    onClick = ({value}) =>{


       // this.setState({ subtopics: this.state.questions.filter(question => question.topic === value).map(a => a.subtopic) });
      //  this.setState({ topics: this.state.questions.filter(question => question.topic === value).map(a => a.subtopic) });
     
    console.log(this.state.subtopics);
        //route to next page
    /*this.props.history.push({
        pathname: '/subtopics',
        state: {  topic: value,
                grade: this.state.grade }}
        );*/

      };



    render(){
        return (
            <>
            <Banner text="Practice" color='#4CAF50'></Banner>
            
      
                {this.state.subtopics.map((value,index)=> {
                 return <div  style={{margin:'0 20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={index} onClick = {this.onClick.bind(this, {value})}>
                         <Subject key={index} text={value} color='#F39317'></Subject>
                        </div>                  
                })}
           
          
            </>
    )
    }
}
