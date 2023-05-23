import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AddQuestion from './components/Exam/add_question';
import ExamDashboard from './components/Exam/user_dashboard';
import AttempQuestion from './components/Exam/attemp_to_exam';
import FinishAttemps from './components/Exam/finish_attemp';
import AdminExam from './components/Exam/all_exam_admin';
import AdminViewExam from './components/Exam/admin_view_exam';

import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function App() {

  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AddQuestion" element={<AddQuestion />} exact /> 
        <Route path="/ExamDashboard" element={<ExamDashboard />} exact /> 
        <Route path="/AttempQuestion" element={<AttempQuestion />} exact /> 
        <Route path="/FinishAttemps" element={<FinishAttemps />} exact /> 
        <Route path="/AdminPanelForExam" element={<AdminExam />} exact /> 
        <Route path="/AdminViewExam" element={<AdminViewExam />} exact /> 
        

      </Routes>
    </BrowserRouter>
  )
};
