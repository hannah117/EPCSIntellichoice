import React, { useState } from 'react';
import './style.css'
import { TextField } from "@material-ui/core";
import './input_box'

const Question = ({symbol, max, numTest, numTest2}) => {
    
    /* Generate 2 random numbers */
    console.log("looped question function");
    console.log("numTest: " + numTest);
    console.log("numTest2: " + numTest2);

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
    const [value, setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    }
    return(
        <>
            <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
                <h1>What is {num1} {symbol} {num2} = ?</h1>
            </div>
            <TextField mx = {1}
                label = "Enter Answer" 
                value={value} variant="outlined" 
                onChange={handleChange.bind(this)}>
            </TextField>
            <h1>Answer: {answer}</h1>
        </>
    )
}

export default Question;