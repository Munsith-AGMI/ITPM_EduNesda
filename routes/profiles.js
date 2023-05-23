const express = require('express');
const Profiles = require('../models/profile');

const router = express.Router();

//Add Profiles
router.post('/profile/add', (req,res) =>{
    let newProfile = new Profiles(req.body);

    newProfile.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Profiles saved successfully"
        });
    });
});



//get Profiles
router.get('/profile', (req,res) =>{
    Profiles.find().exec((err,Profiles) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProfiles:Profiles
        });
    });
});

//get specific Inquiry
router.get('/profile/:id', (req, res) => {
    let profileId = req.params.id;
    Profiles.findById(profileId, (err, profile) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        profile
      });
    });
  });


//update Profiles
router.put('/profile/update/:id',(req,res)=>{
    Profiles.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,posts)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});



//delete post

router.delete('/profile/delete/:id',(req,res) =>{
    Profiles.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;