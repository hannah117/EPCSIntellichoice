import React, { Component } from 'react';

import '../components/Banner/style.css'
import Subject from '../components/Subjects'


export default class QuestionTable extends Component {
    render() {
        return (
            <tr>
                <td>
                     {this.props.obj.topic}
                </td>
                <td>
                    {this.props.obj.problem}
                </td>
                <td>
                    {this.props.obj.correctAnswer}
                </td>
                <td>
                    {this.props.obj.difficulty}
                </td>
                <td>
                    {this.props.obj.gradeLevel}
                </td>
                
             
            </tr>
        );
    }
}

