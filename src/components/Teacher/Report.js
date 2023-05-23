import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Teacher = (props) => ( 
    <tr>
     </tr>
);

export default class TeacherList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Teacher: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Teacher/")
            .then((response) => {
                this.setState({ Teacher: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Teacher/")
            .then((response) => {
                this.setState({ Teacher: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }



    TeacherList() {
        return this.state.Teacher.map((currentTeacher) => {
            return ( <
                Teacher Teacher = { currentTeacher }
                deleteTeacher = { this.deleteTeacher }
                key = { currentTeacher._id }
                />
            );
        });
    }



    myfunction(){
   
        window.print();
       }


   

   

    render() {
        return ( 
            <div className = "container" >
            
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Teacher Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Teacher ID </th> 
            <th>  Name </th >
             < th > Teaching Module  </th> 
             <th> Contact No </th>
             <th> Address </th>
            <th> Gender </th >
            <th > DOJ </th> 
            </tr> </thead > 
            <tbody >  {
                this.state.Teacher.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.TID } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Teaching_Module  } </td>
                     <td > { props.Contact_No } </td> 
                     <td > { props.Address } </td> 
                     <td > { props.Gender } </td> 
                     <td > { props.DOJ } </td> 
                    
                    </ tr >))}  </tbody> </table > 
                     <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
            </div >
        );
    }
}