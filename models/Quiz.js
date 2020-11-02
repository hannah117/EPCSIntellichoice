const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = require('../../models/Question');

//create schema
const QuizSchema = new Schema ({
    
    topic:{
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    questions:{
        type: [Object] 
    }
   
        
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
