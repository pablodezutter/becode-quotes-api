const express = require ('express');

const app = express();

//Middlewares 
//good for authentication
app.use('/posts', () =>{

    console.log('this is a middleware function running');
});



//ROUTES
app.get('/', (req,res)=>{
    res.send('we are on home');
});

app.get('/posts', (req,res)=>{
    res.send('we are on posts');

});


//How do we listen to the port
app.listen(5000);