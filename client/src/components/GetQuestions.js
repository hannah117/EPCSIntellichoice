import React, { Component } from 'react';
import axios from 'axios';
import QuestionTable from './QuestionTable';

export default class GetQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = { questions: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/questions')
            .then(res => {
                this.setState({ questions: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    questionTable() {
        const ques = this.state.questions.filter(question => question.topic === "fractions");
        return (ques.map((data, i) => {
            return <QuestionTable obj={data} key={i} />;
        }));
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Topic</td>
                                <td>Problem</td>
                                <td>Correct Answer</td>
                                <td>Difficulty</td>
                                <td>Grade Level</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.questionTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}