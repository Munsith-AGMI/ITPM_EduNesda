const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
   
    name : {
        type:String,
        required :true
    },
    email : {
        type:String,
        required :true
    },
    pNumber: {
        type:String,
        required :true
    },
    reactF : {
        type:String,
        required :true
    },
    reason : {
        type:String,
        required :true
    }
    
});

module.exports = mongoose.model('feedbacks',feedbackSchema);

