import React, { Component } from 'react'
import axios from 'axios'
import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

function testing(topicName){

  let grade = '2' 
  let topic= topicName
  let subtopics = []
  let questions = [];

let ques = [];
axios.get('http://localhost:3000/api/questions')
    .then(res => {
        ques = res.data
        ques = ques.filter(question =>question.gradeLevel === grade && question.topic === topic);
        ques = ques.map(a => a.subtopic);
        subtopics = ques;

        // console.log(ques);
    })
    .catch(function (error) {
        console.log(error);
    })
           
   


        return (
        <>
        <Banner text="Practice" color='#4CAF50'></Banner>
        
        <div style={{margin:'0 20%'}}>
        {console.log(subtopics)}
        {subtopics.map((value,index)=> {
                return <Subject text={value} color='#F39317'></Subject>
            })}
        </div>
            </>
    )
    }
    export default function  testing(topicName)

