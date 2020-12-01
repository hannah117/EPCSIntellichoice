
import axios from 'axios'
import '../components/Banner/style.css'

export default function getList(grade , topicName) {        //receives student grade level and topic clicked
    let ques = [];
    axios.get('http://localhost:3000/api/questions')
        .then(res => {
            ques = res.data
            ques = ques.filter(question =>question.gradeLevel === '2' && question.topic === 'addition');
            console.log(ques);
            ques = ques.map(a => a.subtopic);
        
            //console.log(subtopics);
           // console.log('hello');
           // console.log(ques);
        })
        .catch(function (error) {
            console.log(error);
        })
        return ques;                                        //returns array of applicable subtopics
    }     