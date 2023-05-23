const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
   
    f_name : {
        type:String,
        required :true
    },
    NIC : {
        type:String,
        required :true
    },
    email : {
        type:String,
        required :true
    },
    p_number : {
        type:String,
        required :true
    },
    D_O_B : {
        type:String,
        required :true
    },
    Address : {
        type:String,
        required :true
    },
    imageUrl:{
        type:Array,
    }
    
});

module.exports = mongoose.model('Profiles',profileSchema);

