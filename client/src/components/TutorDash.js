import React, { Component } from 'react';
import './QuestionList.css';
import{
    Button,
    Container,
    Row,
    Col 
} from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid';


class QuestionList extends Component {
    state = {

        questions: [
            {id: uuid(), topic: 'fractions', gradeLevel: '8', difficulty: 'hard', correctAnswer: 'false' , problem: 'Is 1/2 equal to 2/3?'},
            {id: uuid(), topic: 'fractions', gradeLevel: '8', difficulty: 'hard', correctAnswer: 'false' , problem: 'Is 1/2 equal to 2/3?'},
            {id: uuid(), topic: 'fractions', gradeLevel: '8', difficulty: 'hard', correctAnswer: 'false' , problem: 'Is 1/2 equal to 2/3?'},
            {id: uuid(), topic: 'fractions', gradeLevel: '8', difficulty: 'hard', correctAnswer: 'false' , problem: 'Is 1/2 equal to 2/3?'}

        ]
    }

    render() {
        const { questions } = this.state;

        return(
            <Container>
             

<Container >
    <Row style={{margin: '3rem'}}>
        
        
        <Col>
        <Button
   className= "blocks"
   style={{ margin: '2rem',height: '16rem', width: '24rem'}}>
       "Decimal"
</Button>
        </Col>
    </Row>
    <Row style={{margin: '3rem'}} >
        <Col>
        <Button
className= "blocks"
style={{ margin: '2rem',height: '16rem', width: '24rem'}}>

</Button>
        </Col>
        
        <Col>
        <Button
   className= "blocks"
   style={{margin: '2rem', height: '16rem', width: '24rem'}}>
</Button>
        </Col>
    </Row>

</Container>
</Container>


        );
    }
}
export default QuestionList;