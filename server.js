const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const profileRoutes = require('./routes/profiles');
const feedbackRoutes = require('./routes/feedbacks');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(profileRoutes);
app.use(feedbackRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://pragas:Pragas623@cluster0.y8ert77.mongodb.net/';
// const DB_URL = 'mongodb+srv://rddsdhanu:alba123@ecosaver.lk73zkm.mongodb.net/profile?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});