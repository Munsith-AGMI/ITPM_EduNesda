const express = require('express');
const feedbacks = require('../models/feedback');

const router = express();

//add feedback

router.post('/feedback/add',(req,res)=>{

    let newFeedback = new feedbacks(req.body);

    newFeedback.save((err)=>{
          if(err){
              return res.status(400).json({
                  error:err
              });
          }
          return res.status(200).json({
              success:"feedback Added Successfully"
          });

    });
});


//get feedbacks

router.get('/feedback',(req,res) =>{
    feedbacks.find().exec((err,feedbacks) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedbacks:feedbacks
        });
    });

});

router.delete('/feedback/delete/:id',(req,res) =>{
    feedbacks.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});



module.exports = router;