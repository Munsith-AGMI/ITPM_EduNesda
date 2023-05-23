import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar.component"
import Footer from "../../components/Footer.component"
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

    deleteTeacher(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Teacher/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Teacher: this.state.Teacher.filter((el) => el._id !== id),
            });
        }
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


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Teacher/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.TID.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Teacher: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
             
            <Navbar/>
           
            
            <div  >

            
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Teacher Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search Tid/Name" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
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
            <th> Action </th > 
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
                    <td >
                    < Link to = { "/Teacher-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteTeacher(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Teacher-add/" >
            <button type = "button" class = "btn btn-primary" variant = "primary" >
            Add Teacher  </button> </Link > </div> 

            <div style = {{ float: 'left' }} >
            <Link to = "/Report/" >
                        <button type="button" class="btn btn-primary" variant = "primary" > Report </button></Link ></div>
          
                       
                    <br></br>   <br></br>  <br></br>  <br></br>   <Footer/>  </div >
        );
    }
}