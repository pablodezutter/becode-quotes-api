const express = require("express");
const router = express.Router();
const Post= require('../models/Post'); // double dots!!




router.get('/', async(req,res)=>{
    //res.send('we are on posts');
try{
    const post= await Post.find(); // method in mongoose
    res.json(posts);

}catch(err){
    res.json({ message: err });
}
});

router.get('/specific', (req,res)=>{
    res.send('specific post');

});



router.post('/', async (req, res) =>{
    // console.log(req.body);
    const post= new Post ({
        title: req.body.title,
        description: req.body.description

    });

    //Create promise
try{
   const savedPost= await post.save();
    //      .then(data =>{
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err });


    // }); 

//Simplefy this:
    res.json(savedPost);
}catch(err){
    res.json({ message: err });

}




});


module.exports = router;