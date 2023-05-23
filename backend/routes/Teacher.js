const router = require('express').Router();
let Teacher = require('../models/Teacher.model');


//what should we do if req - http://localhost:5000/teacher/
router.route('/').get((req, res) => {
    Teacher.find()
        .then(Teacher => res.json(Teacher))
        .catch(Teacher => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const TID = req.body.TID;
    const Name = req.body.Name; 
    const Teaching_Module = req.body.Teaching_Module;
    const Contact_No = req.body.Contact_No;
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const DOJ = req.body.DOJ;



    const newTeacher = new Teacher({
        TID,
        Name,
        Teaching_Module,
        Contact_No,
        Address,
        Gender,
        DOJ,
       

    });


    //newTeacher.save() - passing data received from frontend to database via(haraha) the teacher model 
    newTeacher.save()
        .then(() => res.json('Teacher added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Teacher.findById(req.params.id)
        .then(Teacher => res.json(Teacher))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Teacher.findByIdAndDelete(req.params.id)
        .then(() => res.json('Teacher deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Teacher.findById(req.params.id)
        .then(Teacher => {
            Teacher.TID = req.body.TID;
            Teacher.Name = req.body.Name;
            Teacher.Teaching_Module = req.body.Teaching_Module;
            Teacher.Contact_No = req.body.Contact_No;
            Teacher.Address = req.body.Address;
            Teacher.Gender = req.body.Gender;
            Teacher.DOJ = req.body.DOJ;

            Teacher.save()
                .then(() => res.json('Teacher updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;