import React from 'react';
import { Grid, Typography, Paper, Divider } from '@material-ui/core';
import Form from './form';
import './style.css'

const SubmissionBox = ({num1, num2, funct, answer}) => {
    
    const updateAppState = (guess) => {
        console.log(answer);
        console.log(guess);

        const correct = (answer == guess);
        if (correct) {
            console.log("Correct answer!");
            window.location.reload();
        }
        else {
            console.log("Wrong answer, try again");
        }

    }

    return(
        <Grid container style = {{height: '50vh'}} justify="center" alignItems="center">
            <Grid item xs={4}>
                <Paper style = {{padding: '50px 50px 5px 50px'}} elevation={6}>
                    <Typography align="center" variant="h2" gutterBottom>What is {num1} {funct} {num2}?</Typography>
                    <Divider style ={{margin: '20px 0'}} />
                    <Form returnGuessToApp={guess => updateAppState(guess)}/>
                    <div id="incorrect"><h1 style={{visibility: "hidden", align: "center", color: "#F39317"}}>Not quite! Try again.</h1></div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SubmissionBox;

