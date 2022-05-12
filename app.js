const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoutes = require('./routes/posts');


app.use('/posts', postsRoutes);


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

/*
app.get('/posts', (req, res) => {
    res.send('We are on posts');
});
*/

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB!'));

//how to start listening to the server
app.listen(3000);