import React from 'react';
import './style.css'

const Question = ({symbol, max}) => {
    
    var num1 = Math.floor(Math.random() * Math.floor(max));
    var num2 = Math.floor(Math.random() * Math.floor(max));
    var answer = 0

    if (symbol === "+") {
        answer = num1 + num2;
    }
    else if (symbol === '-') {
        while (num1 < num2) {
            num1 = Math.floor(Math.random() * Math.floor(max));
            num2 = Math.floor(Math.random() * Math.floor(max));
        }
        answer = num1 - num2;
    }
    else if (symbol === '*') {
        answer = num1 * num2;
    }
    else if (symbol === '÷' || symbol === '/') {
        while (num1 % num2 != 0) {
            num1 = Math.floor(Math.random() * Math.floor(max));
            num2 = Math.floor(Math.random() * Math.floor(max));
        }
        if (symbol === '/')
            symbol = '÷'; 
        answer = num1 / num2;
    }

    return(
        <>
            <h1>What is {num1} {symbol} {num2} = ?</h1>
            
            <form>
                <input type="text" id="input-answer" name="input-answer" placeholder="Enter your answer here" value='value'></input>
                <input type="submit" value="Submit"></input>
            </form>

            <h1>Answer: {answer}</h1>
        </>
    )
}

export default Question;