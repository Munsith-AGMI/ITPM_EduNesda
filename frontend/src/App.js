import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import AddProfile from './components/AddProfile';
import UpdateProfile from './components/UpdateProfile';
import Admin from './components/Admin';
import Header from './components/Header';
import Footer from './components/footer';
import Feedback from './components/Feedback';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         <Header/>
         <Route path="/" exact component={AddProfile}></Route>
         <Route path="/feed" exact component={Feedback}></Route>
         <Route path="/update" component={UpdateProfile}></Route>
         <Route path="/Admin" component={Admin}></Route>
         <Footer/>
        </div>
      </BrowserRouter>
       
    )
  }  
}
