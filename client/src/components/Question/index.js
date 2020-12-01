import React from 'react';
import './style.css'
import SubmissionBox from './submission_box'
import Form from './form'

const Question = ({symbol, max1, max2}) => {
    
    var num1 = Math.floor(Math.random() * Math.floor(max1));
    var num2 = Math.floor(Math.random() * Math.floor(max2));
    var answer = 0

    if (symbol === "+") {
        answer = num1 + num2;
    }
    else if (symbol === '-') {
        while (num1 < num2) {
            num1 = Math.floor(Math.random() * Math.floor(max1));
            num2 = Math.floor(Math.random() * Math.floor(max2));
        }
        answer = num1 - num2;
    }
    else if (symbol === '*') {
        answer = num1 * num2;
    }
    else if (symbol === '÷' || symbol === '/') {
        while (num1 % num2 != 0) {
            num1 = Math.floor(Math.random() * Math.floor(max1));
            num2 = Math.floor(Math.random() * Math.floor(max2));
        }
        if (symbol === '/')
            symbol = '÷'; 
        answer = num1 / num2;
    }

    return(
        <>
            <SubmissionBox num1={num1} num2={num2} funct={symbol} answer={answer}/>
        </>
    )
}

export default Question;