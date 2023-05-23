import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";
import Navbar from "../../components/navbar.component"
import Footer from "../../components/Footer.component"

export default class CreateTeacher extends Component {
    constructor(props) {
        super(props);

        
        this.onChangeTID = this.onChangeTID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTeaching_Module  = this.onChangeTeaching_Module .bind(this);
        this.onChangeContact_No = this.onChangeContact_No.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDOJ = this.onChangeDOJ.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            TID: "",
            Name: "",
            Teaching_Module  :"1",
            Contact_No: "",
            Address: "",
            Gender: "Male",
            DOJ: "",
            Teacher: [],
        };
    }

   
     //set the TID

    onChangeTID(e) {
        this.setState({
            TID: e.target.value,
        });
    }
    
    //set the Name
    
    onChangeName(e) {
        this.setState({
            Name: e.target.value,
        });
    }
    
    //set Teaching_Module
    onChangeTeaching_Module(e) {
        this.setState({
            Teaching_Module: e.target.value,
        });
    }
    
    //set Contact_No
    onChangeContact_No(e) {
        this.setState({
            Contact_No: e.target.value,
        });
    }
    
    //set Address
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value,
        });
    }
    //set Gender
    onChangeGender(e) {
        this.setState({
            Gender: e.target.value,
        });
    }
    
    //set DOJ
    onChangeDOJ(e) {
        this.setState({
            DOJ: e.target.value,
        });
    }

    
    //submit Function

    onSubmit(e) {
        e.preventDefault();

        const {TID,Contact_No} = this.state;


        const Teacher = {
            TID: this.state.TID,
            Name: this.state.Name,
            Teaching_Module: this.state.Teaching_Module,
            Contact_No: this.state.Contact_No,
            Address: this.state.Address,
            Gender: this.state.Gender,
            DOJ: this.state.DOJ
               
            };

            console.log(Teacher);


            if (TID.length < 4) {
                swal("TID No invalid !", "TID No should be greater than 4", "error");
           
            }else if (Contact_No.length < 10) {
                swal("Contact_No No invalid !", "Contact_No No should be greater than 9", "error");
            }else{
            axios
                .post("http://localhost:5000/Teacher/add", Teacher)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Create Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Teacher/"));
            });
        }
        
    }

    render() {
        return (<div  >
            <Navbar/>
           <div class = "row ">
           <div class = "col-6" >
           <br/>
           <img src="https://cdn.pixabay.com/animation/2022/11/13/07/16/07-16-26-181_512.gif" width="80%" height="80%" />
           </div> <div class = "col-6" >
           <div div class = "myformstyle" >
           <div className = "card-body" >
           <div className = "col-md-8 mt-4 mx-auto" > </div> 
           <h3 className = "text-center" > 
           <font face = "Comic sans MS" size = "6" > New Teacher </font>
           </h3 > <br></br>
           
           <br></br>
           
            <form onSubmit = { this.onSubmit } >

           


           
            <div className = "form-group" >
           <label >Teacher ID: </label> 
           <input type = "text"
           placeholder = "Teacher Id"
           required  className = "form-control"
           value = { this.state.TID }
           onChange = { this.onChangeTID }/>
            </div > 

           <div className = "form-group" >
           <label > Name: </label> 
           <input type = "text"
           placeholder = " Name"
           required  className = "form-control"
           value = { this.state.Name}
           onChange = { this.onChangeName }/>
            </div > 

            <div className = "form-group" >
            <label >Teaching Module: </label> 
            <select ref = "Teaching_Module"
            placeholder = "Teaching_Module"
            required className = "form-control"
            value = { this.state.Teaching_Module }
            onChange = { this.onChangeTeaching_Module } >
            <option value = "1" > 1 </option> 
            <option value = "2" > 2 </option>
            <option value = "3" > 3 </option> 
            <option value = "4" > 4 </option>
            <option value = "5" > 5</option> 
            </select > </div>

            <div className = "form-group" >
           <label >Contact Number: </label> 
           <input type = "Number"
           placeholder = "Contact No"
           required  className = "form-control"
           value = { this.state.Contact_No }
           onChange = { this.onChangeContact_No}/>
            </div >

            <div className = "form-group" >
           <label > Address: </label> 
           <input type = "text"
           placeholder = "Address"
           required  className = "form-control"
           value = { this.state.Address }
           onChange = { this.onChangeAddress}/>
            </div >


            <div className = "form-group" >
            <label > Gender: </label> 
            <select ref = "Gender"
            placeholder = "Gender"
            required className = "form-control"
            value = { this.state.Gender }
            onChange = { this.onChangeGender } >
            <option value = "Male" > Male </option> 
            <option value = "Female" > Female </option>
            </select > </div>

            <div className = "form-group" >
           <label > Date Of Join: </label> 
           <input type = "date"
           placeholder = " Date Of Join"
           required  className = "form-control"
           value = { this.state.DOJ }
           onChange = { this.onChangeDOJ}/>
            </div >

            

           <div className = "form-group" >
           <input type = "submit"
           value = "Create "
           className = "btn btn-primary" />
           </div>{" "} </form >  </div> </div > </div>
            </div ><br/> <br/>  <Footer/>  </div>
        );
    }
}