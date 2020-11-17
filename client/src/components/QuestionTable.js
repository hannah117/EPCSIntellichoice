import React, { Component } from 'react';

class QuestionTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.topic}
                </td>
                <td>
                    {this.props.obj.subtopic}
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

export default QuestionTable;