const express = require('express');
const router = express.Router();

//question model
const Question = require('../../models/Question');



//@route GET api/questions
//@desc Get all questions
//@acces public

router.get('/', (req, res) =>{
    Question.find()
        .then(questions => res.json(questions))
});




//@route POST api/questions
//@desc Create questions
//@acces public

router.post('/', (req, res) =>{
   const newQuestion = new Question({
       topic: req.body.topic,
       problem: req.body.problem,
       correctAnswer: req.body.correctAnswer,
       gradeLevel: req.body.gradeLevel,
       difficulty: req.body.difficulty
   });

   newQuestion.save().then(question => res.json(question));

});


module.exports = router;