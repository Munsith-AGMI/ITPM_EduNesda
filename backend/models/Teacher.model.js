const mongoose = require('mongoose');

const Schema = mongoose.Schema;//create a schema in mongodb assign it to an object

//Databass Schema

const TeacherSchema = new Schema({
    TID: { type: String, required: true },
    Name: { type: String, required: true },
    Teaching_Module: { type: String, required: true },
    Contact_No: { type: Number, required: true },
    Address: { type: String, required: true },
    Gender: { type: String, required: true },
    DOJ: { type: String, required: true },
   


}, {
    timestamps: true,
});



const Teacher = mongoose.model('Teacher', TeacherSchema);//dbname(teachers),schema

module.exports = Teacher;