const express = require("express");
const router = express.Router();
const Post= require('../models/Post'); // double dots!!




router.get('/', (req,res)=>{
    res.send('we are on posts');

});

router.get('/specific', (req,res)=>{
    res.send('specific post');

});



router.post('/', (req, res) =>{
    // console.log(req.body);
    const post= new Post ({
        title: req.body.title,
        description: req.body.description

    });

    //Create promise

    post.save()
        .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err });


    }); 

});


module.exports = router;