const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema
const QuestionSchema = new Schema ({
    
    topic:{
        type: String,
        required: true
    },
    problem:{
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        required: true
    },
    gradeLevel:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});

module.exports = Question = mongoose.model('question', QuestionSchema);
