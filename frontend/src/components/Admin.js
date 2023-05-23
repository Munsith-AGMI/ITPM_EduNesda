import React,{Component} from 'react';
import axios from 'axios';
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class Admin extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[],
    feedback:[]
  };   
}

componentDidMount(){
  this.retrieveProfiles();
  this.retrieveProfiles2();
}

retrieveProfiles(){
  axios.get("/profile").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingProfiles
      });
       
      console.log(this.state.posts)
    }
  });

}
retrieveProfiles2(){
  axios.get("/feedback").then(res =>{
    if(res.data.success){
      this.setState({
        feedback:res.data.existingFeedbacks
      });
       
      console.log(this.state.feedback)
    }
  });

}
onDelete=(id)=>{

  axios.delete(`/profile/delete/${id}`).then((res)=>{
    alert("Successfully Deleted");
    this.retrieveProfiles();
  })
}
onDelete2=(id)=>{

  axios.delete(`/feedback/delete/${id}`).then((res)=>{
    alert("Successfully Deleted");
    this.retrieveProfiles();
  })
}

filterData(profiles,searchKey){
   
const result = profiles.filter((inquiry)=>
 inquiry.f_name.toLowerCase().includes(searchKey)||
 inquiry.email.toLowerCase().includes(searchKey)
) 

this.setState({posts:result})

}

handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;

  
    axios.get("/profile").then(res =>{
        if(res.data.success){
          this.filterData(res.data.existingProfiles,searchKey)
        }   
    }); 
}
filterData2(feedbacks,searchKey2){
   
  const result = feedbacks.filter((feed)=>
   feed.name.toLowerCase().includes(searchKey2)||
   feed.reactF.toLowerCase().includes(searchKey2)
  ) 
  
  this.setState({feedback:result})
  
  }
  
  handleSearchArea2 = (a) =>{
      const searchKey2= a.currentTarget.value;
      axios.get("/feedback").then(res =>{
          if(res.data.success){
            this.filterData2(res.data.existingFeedbacks,searchKey2)
          }   
      }); 
  }

  generateReport() {
    const doc = new jsPDF();
    const report = this.state.posts;

    doc.autoTable({
      head: [
        [
        "Name",
        "NIC",
        "Email",
        "PhoneNo",
        "D O B",
        "Address",
        ]
      ],
      body: report.map((inquiry) => [
        inquiry.f_name,
        inquiry.NIC,
        inquiry.email,
        inquiry.p_number,
        inquiry.D_O_B ,
        inquiry.Address 
      ])
    });

    doc.setFontSize(12);
    doc.text("Profile Report", 10, 10);
    doc.text("Generated on " + new Date().toLocaleString(), 10, 280);
    doc.setFontSize(8);
    doc.setTextColor(100);

    doc.save("report.pdf");
  }

  render(){

  return (
    <div className="container">
      <h3 style={{marginLeft:'15vw',marginTop:'3vw'}}>Admin Dashboard</h3>
    <div className="box">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Profiles</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}
          />
        </div>
        <button onClick={()=>this.generateReport}>Report</button>
      </div>

      <table className="table table-hover" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>

          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((inquiry, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`/inquiry/${inquiry._id}`} style={{ textDecoration: 'none' }}>
                  {inquiry.f_name}
                </a>
              </td>
              <td>{inquiry.email}</td>
              <td>
                <a className="btn btn-warning" href={`/update/${inquiry._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update
                </a>
                &nbsp;
                <button className="btn btn-danger" onClick={() =>this.onDelete(inquiry._id)}>
                  <i className="fas fa-trash"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="box">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Feedback</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery2"
            onChange={this.handleSearchArea2}
          />
        </div>
      </div>

      <table className="table table-hover" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Reaction</th>
            <th scope="col">Reason</th>
          </tr>
        </thead>
        <tbody>
          {this.state.feedback.map((feed, indexa) => (
            <tr key={indexa}>
              <th scope="row">{indexa + 1}</th>
              <td>
                <a href={`/feedback/${feed._id}`} style={{ textDecoration: 'none' }}>
                  {feed.name}
                </a>
              </td>
              <td>{feed.email}</td>
              <td>{feed.reactF}</td>
              <td>{feed.reason}</td>
              <td>
                <button className="btn btn-danger" onClick={() =>this.onDelete2(feed._id)}>
                  <i className="fas fa-trash"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
        
    )
  }}

