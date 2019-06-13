const express = require("express");
const router = express.Router();
const Post= require('../models/Post'); // double dots!!


    //get post

router.get('/', async(req,res)=>{
    //res.send('we are on posts');
try{
    const posts= await Post.find(); // method in mongoose
    res.json(posts);

}catch(err){
    res.json({ message: err });
}
});



    //submit post

router.post('/', async(req, res) =>{
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


//specific post

router.get('/:postId', async(req,res)=>{
    try{
    //console.log(req.params.postId);
   const post= await Post.findById(req.params.postId);
   res.json(post);
    }catch(err){
        res.json({message:err});

    }

});

//delete specific post
router.delete('/:postId', async(req,res) =>{
    try{
    const removedPost= await Post.remove({_id: req.params.postId });
    res.json(removedPost);
    }catch(err){
        res.json({message:err});

    }
});

//update a post

router.patch('/:postId', async(req,res) =>{
    try{
    const updatedPost = await Post.updateOne(
        { _id: req.params.postId },{ $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    }catch (err){
        res.json({message:err });
    }
})

module.exports = router;