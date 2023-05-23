import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Teacher

import EditTeacher from "./components/Teacher/edit-Teacher.component";
import CreateTeacher from "./components/Teacher/create-Teacher.component";
import TeacherList from "./components/Teacher/Teacher-list.component";
import TeacherReport from "./components/Teacher/Report";

import main from "./components/login.component";




function App() {

    return (<Router >
        <div className = "container"  >
       
        <br/>
       
        <Route path = "/" exact component = { main}/>

        <Route path = "/Teacher-add/" component = { CreateTeacher }/>
        <Route path = "/Teacher/"  component = { TeacherList }/> 
        <Route path = "/Teacher-Edit/:id" component = { EditTeacher }/>
        <Route path = "/Report/" component = {TeacherReport }/>


       

          </div > </Router>
    );
}

export default App;