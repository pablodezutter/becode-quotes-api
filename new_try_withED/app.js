const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
require ('dotenv/config');

//Middleware
app.use(bodyParser.json());


//Import route
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//example: app.use('/user', userRoute);


//Middlewares 
//good for authentication
app.use('/posts', () =>{

    console.log('this is a middleware function running');
});

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
() => console.log('connected to DB')

);





//ROUTES
app.get('/', (req,res)=>{
    res.send('we are on home');
});

app.get('/posts', (req,res)=>{
    res.send('we are on posts');

});


//How do we listen to the port
app.listen(5000);