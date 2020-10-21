const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const questions = require('./routes/api/questions')

const app = express();
//middle ware bp

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
    .connect(db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('mongo connected'))
    .catch(err => console.log(err));

//use routes

app.use('/api/questions', questions);
const port = process.env.PORT || 5000;
    
app.listen(port, () => console.log(`Server started on port ${port}` ));

