const express = require('express');
const router = express.Router();
const Exam = require('../model/exam');
const OneQuestion = require('../model/one_question');
const ModuleModel = require('../model/Modules_Model');


router.route("/getAllModule").get((req,res) => {
  ModuleModel.find().then((modules) => {
    res.json(modules)
  }).catch((err) => {
    console.log(err)
  })
});

router.route("/addModule").post((req, res) => {
  const { number, name, code, tmark, Datet, uploader } = req.body;

  const newModule = new Module({
    number,
    name,
    code,
    tmark,
    Datet,
    uploader,
  });

  newModule.save()
    .then((savedModule) => {
      res.json(savedModule);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save module data" });
    });
});



router.get('/totalQuestions/:examCode', async (req, res) => {
  try {
    const { examCode } = req.params;
    const questions = await OneQuestion.countDocuments({ exam: examCode }, null, { timeout: 300000 });
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/totalQuestionsForExam/:examCode', async (req, res) => {
  try {
    const { examCode } = req.params;
    const questions = await OneQuestion.find({ exam: examCode });
    res.json(questions);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/searchExam/:searchText', async (req, res) => {
  try {
    const searchText = req.params.searchText;
    const exams = await Exam.find({ exam_title: { $regex: searchText, $options: 'i' } });
    res.status(200).send(exams);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// GET all exams and their questions
router.get('/getAllExam', async (req, res) => {
  try {
    const quizzes = await Exam.aggregate([
      {
        $lookup: {
          from: 'one_quizzes',
          localField: 'exam_code',
          foreignField: 'exam',
          as: 'questions'
        }
      },
      {
        $project: {
          _id: 1,
          subject: 1,
          exam_title: 1,
          exam_code: 1,
          duration: 1,
          timestamp: 1,
          question_count: { $size: '$questions' }
        }
      }
    ]);
    res.json(quizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// GET a specific quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quiz = await Exam.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// CREATE a new quiz
router.post('/addExam', async (req, res) => {
  const { subject, exam_title, exam_code , duration } = req.body;
  try {
    const quiz = new Exam({
      subject,
      exam_title,
      exam_code ,
      duration
    });
    await quiz.save();
    res.json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// UPDATE a quiz by ID
router.put('/updateExam/:id', async (req, res) => {
  const { id } = req.params;
  const { subject, question_title, duration } = req.body;

  try {
    const updatedData = { subject, question_title, duration };
    const updatedExam = await Exam.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedExam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    res.json(updatedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update the exam' });
  }
});


// DELETE a quiz by ID
router.delete('/deleteExamByID/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the exam with the provided ID from your data source (e.g., database)
    // Replace the following code with your own logic to delete the exam
    // For example, if you are using Mongoose:
    await Exam.findByIdAndDelete(id);

    // Return a success response
    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the deletion process
    console.error(error);
    res.status(500).json({ error: 'Failed to delete the exam' });
  }
});

 

module.exports = router;
