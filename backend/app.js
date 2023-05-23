const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB connection successfully.");
});


app.use(express.json());

// Add CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
});
  

const exam = require('./routes/exam.js');
app.use('/exam', exam);

const onequestion = require('./routes/one_question.js');
app.use('/oneQuestion', onequestion);




app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`);
});
