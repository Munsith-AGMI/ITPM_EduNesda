import React, { Component } from 'react'
import axios from 'axios'

export default class UpdateInquiry extends Component{
    
    constructor(props){
        super(props);
        this.state={
            f_name:"",
            NIC:"",
            email:"",
            p_number:"",
            D_O_B:"",
            Address:"",
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

       e.preventDefault(); 
       const id = this.props.match.params.id;

       const {f_name,NIC,email,p_number,D_O_B,Address,} = this.state;

       const data ={
            f_name:f_name,
             NIC:NIC,
             email:email,
             p_number:p_number,
             D_O_B:D_O_B,
             Address:Address,
       }

       console.log(data)

       axios.put(`/profile/update/${id}`,data).then((res) =>{
           if(res.data.success){
               alert("profile Updated Successfully")
               this.setState(
                   {
                    f_name:"",
                    NIC:"",
                    email:"",
                    p_number:"",
                    D_O_B:"",
                    Address:""
                   }
               )
           }
       })


    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/profile/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    f_name:res.data.inquiry.f_name,
                    NIC:res.data.inquiry.NIC,
                    email:res.data.inquiry.email,
                    p_number:res.data.inquiry.p_number,
                    D_O_B:res.data.inquiry.D_O_B,
                    Address:res.data.inquiry.Address
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
    <div className="container-A">

                <h3 style={{marginTop:'3vw',marginLeft:'35vw'}}>Edit Your profile</h3>
                <img src={this.state.imageUrl} alt='profile' style={{marginLeft:'10vw', width:'10vw'}}/>
              <form className="form-contain" noValidate>
            
                <div className="input-box">
                  <div className="input-div" style={{marginBottom:'5px'}}>Full Name</div>
                  <input type="text"
                  className="input"
                  name="f_name"
                  placeholder="Enter Name"
                  value={this.state.f_name}
                  onChange={this.handleInputChange}
                  required/>
                </div>

                <div className="input-box" style={{marginBottom:'15px'}}>
                  <div className="input-div" style={{marginBottom:'5px'}}>Email</div>
                  <input type="text"
                  className="input"
                  name="email"
                  placeholder="123@example.com"
                  value={this.state.email}
                  onChange={this.handleInputChange} required
                  />
                  </div>

                  <div className="input-box" style={{marginBottom:'15px'}}>
                  <div className="input-div" style={{marginBottom:'5px'}}>NIC</div>
                  <input type="text"
                  className="input"
                  name="NIC"
                  placeholder="Enter Bill Number"
                  value={this.state.NIC}
                  onChange={this.handleInputChange}
                  required
                  />
                  </div>

                  <div className="input-box" style={{marginBottom:'15px'}}>
                  <div className="input-div" style={{marginBottom:'5px'}}>Phone Number</div>
                  <input type="text"
                  className="input"
                  name="p_number"
                  placeholder="Enter Contact Number"
                  value={this.state.p_number}
                  onChange={this.handleInputChange} 
                  required/>
                  </div>

                  <div className="input-box" style={{marginBottom:'15px'}}>
                  <div className="input-div">Date Of Birth</div>
                  <input type="text"
                  className="input"
                  name="D_O_B"
                  placeholder="Enter Your profile"
                  value={this.state.D_O_B}
                  onChange={this.handleInputChange} required/>
                  </div>

                  <div className="input-box" style={{marginBottom:'15px'}}>
                  <div className="input-div">Town/city</div>
                  <input type="text"
                  className="input"
                  name="Address"
                  placeholder="Enter Your profile"
                  value={this.state.Address}
                  onChange={this.handleInputChange} required/>
                  </div>

                  {/* <div className="input-box" style={{marginBottom:'15px'}}>
                      <div  className="input-div" style={{marginBottom:'5px'}}>profile picture</div>
                      <input type="file" onChange={()=>this.handleImageChange} className='o-input' required/>
                      </div> */}

                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp;Update
                  </button>
            
              </form>
        </div>
    
  )
}}