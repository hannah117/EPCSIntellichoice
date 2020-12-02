import React  from 'react'
import {Component} from 'react'
import{
    Button,
  
} from 'reactstrap';
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'
import '../components/topicPageStyle.css';

export default class topicPage extends Component{


    constructor(props) {
        super(props);
        this.state = { grade: '2' , topics: [], questions: [], subtopics: []};
    }

    
    componentDidMount() {
        //let ques = [];
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
          
               // this.state.questions = res.data.filter(question => question.gradeLevel === this.state.grade).map(a => a.topic);
                this.setState({ questions: res.data.filter(question => question.gradeLevel === this.state.grade)});
                this.setState({ topics: this.state.questions.map(a => a.topic) });


               // console.log(ques);
            })
            .catch(function (error) {
                console.log(error);
            })
          
    };

    onClick = ({value}) =>{


        this.setState({ subtopics: this.state.questions.filter(question => question.topic === value).map(a => a.subtopic) });
      //  this.setState({ topics: this.state.questions.filter(question => question.topic === value).map(a => a.subtopic) });
     
    console.log(this.state.subtopics);
        //route to next page
    this.props.history.push({
        pathname: '/subtopics',
        state: {  topic: value,
                grade: this.state.grade }}
        );

      };

    render(){
        return (
        <>
        <Banner text="Practice" color='#4CAF50'></Banner>
        
  
            {this.state.topics.map((value,index)=> {
             return <div style={{margin:'0 20%'}}>
                    <div class='subjectBox' key={index} onClick = {this.onClick.bind(this, {value})}>
                        <Subject key={index} text={value} color='#F39317'></Subject>
                    </div>
                </div>                  
            })}
       
      
        </>
    )
    }
}

