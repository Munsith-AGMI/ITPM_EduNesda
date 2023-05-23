import React, { useState , useEffect } from 'react';
import {
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBIcon,
    MDBInput,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import Nav from './Header';
import axios from 'axios';
import { Table , Button } from 'react-bootstrap';

function DashboardAdminAllExam() {
    
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const [quizzes, setQuizzes] = useState([]);
    const [search_text, setSearchText] = useState("");

    const [subject, setSubject] = useState('');
    const [exam_title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [examObID, setExamObID] = useState('');
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
        load_data_table();
    }, []);

    function getData(){
      
        fetch('http://localhost:5000/exam/getAllModule')
        .then(res => res.json())
        .then(data => {
            setData(data);
           
        })
        .catch(err => {
        });
    }


    function load_data_table(){
        axios.get('http://localhost:5000/exam/getAllExam')
        .then(response => {
          setQuizzes(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    

    function handleDelete(id) {
      
        Swal.fire({
          title: 'Delete Exam',
          text: 'Are you sure you want to delete this exam?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#dc3545',
          cancelButtonColor: '#6c757d',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
        }).then(result => {
          if (result.isConfirmed) {
            // Perform the delete operation here
            // You can call an API endpoint to delete the exam or update the state accordingly
            // For example:
            axios.delete(`http://localhost:5000/exam/deleteExamByID/${id}`)
              .then(response => {
                // Handle the successful deletion
                Swal.fire('Deleted!', 'The exam has been deleted.', 'success');
                load_data_table();
              })
              .catch(error => {
                // Handle the deletion error
                console.error(error);
                Swal.fire('Error', 'Failed to delete the exam.', 'error');
              });
          }
        });
      }

    function handleEdit(data){
      setSubject(data.subject);
      setTitle(data.exam_title);
      setDuration(data.duration);
      setExamObID(data._id);
      setBasicModal(!basicModal);
    }

    function loadExams(data){
        window.location.href="./AdminViewExam?exam_code="+data.exam_code;
        localStorage.setItem('question',JSON.stringify(data));
    }

    function create_Exam(){
        window.location.href="./AddQuestion";
    }

    function update_exam(){
      Swal.fire({
        icon: 'question',
        title: 'Update Exam',
        text: 'Are you sure you want to update the exam?',
        showCancelButton: true,
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const updatedData = { subject
               , exam_title
               , duration };
            const response = await axios.put(`http://localhost:5000/exam/updateExam/${examObID}`, updatedData);
  
            if (response.data) {
              Swal.fire({
                icon: 'success',
                title: 'Exam Updated',
                text: 'The exam has been successfully updated.',
              });
              setBasicModal(!basicModal);
              getData();
              load_data_table();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to update the exam.',
              });
            }
          } catch (error) {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to update the exam.',
            });
          }
        }
      });
    }

    return (
        <>
        <Nav />
       
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog size="lg">
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Edit Exam</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                    <div className='row'>
                      <div className='col'>
                          <label>Subject : </label>
                          <select className='form-select' value={subject}  onChange={(e) =>{
                                                              setSubject(e.target.value);
                                                          }}>
                              <option value="">Select Subject</option>
                              {data.map((module_name, index) => (
                              <option value={module_name.name}>{module_name.name}</option>
                              ))}
                          </select>
                      </div>
                    </div>  
                    <div className='row mt-2'>
                        <div className='col'>
                            <label>Main Title : </label>
                            <MDBInput className='bg-white' value={exam_title} onChange={(e) =>{
                                                                setTitle(e.target.value);
                                                            }} />
                        </div>
                        <div className='col'>
                            <label>Exam Duration (Min): </label>
                            <MDBInput className='bg-white' value={duration} onChange={(e) =>{
                                                                setDuration(e.target.value);
                                                            }} />
                        </div>
                    </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn color="success" onClick={update_exam}>Update</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <div className='container'>
               <h3>ALL EXAMS</h3>
               <hr/>
               <div className='text-end'>
                    <button className='btn  btn-dark btn-sm' onClick={create_Exam}>Craete Exam</button>
                </div>
                <br/>
                <Table striped bordered hover>
                <thead style={{ background: 'black', color: 'white' }}>
                    <tr>
                    <th>Exam Name</th>
                    <th>Duration</th>
                    <th>Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {quizzes.map(quiz => (
                    <tr key={quiz.exam_code}>
                        <td>{quiz.exam_title}</td>
                        <td>{quiz.duration} Mins</td>
                        <td>
                            <Button variant="danger" size="sm" className='shadow-0' onClick={() => handleDelete(quiz._id)}>
                                Delete
                            </Button>{' '}
                            <Button variant="info" size="sm" className='shadow-0' onClick={() => handleEdit(quiz)}>
                                Edit
                            </Button>{' '}
                            <Button variant="success" size="sm" className='shadow-0' onClick={() => loadExams(quiz)}>
                                Load Exams
                            </Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
        </div>
        </>
    )
}  


export default DashboardAdminAllExam; 
