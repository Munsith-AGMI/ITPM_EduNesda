import React,{useState} from 'react'
import axios from 'axios'
import './AddProfileStyle.css';

const AddProfile = () =>{

    const [formData, setFormData] = useState({
            f_name:"",
            NIC:"",
            email:"",
            p_number:"",
            D_O_B:"",
            Address:"",
            imageUrl:['https://cdn-icons-png.flaticon.com/512/236/236832.png?w=740&t=st=1684273734~exp=1684274334~hmac=42c628843201e7125ab4fcb9f5cfe6b3b7b076dd54dc2846cac56538de9f0f85']
      });
      console.log(formData);
    
      const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imagePromises = files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        });
    
        Promise.all(imagePromises)
          .then((base64Images) => {
            setFormData({
              ...formData,
              imageUrl: [base64Images],
            });
          })
          .catch((error) => {
            console.error(error);
          });
    
          
      };
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const onSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          axios.post('/profile/add', formData).then((res) => {
            if (res.data.success) {
              alert('Profile Register Successfully');
              window.location = "/Admin";
              setFormData({
                  f_name:"",
                  NIC:"",
                  email:"",
                  p_number:"",
                  D_O_B:"",
                  Address:"",
                  imageUrl: [],
              });
            } else {
              alert('Failed to Register Profile');
            }
          }).catch((error) => {
              alert('Failed to Register Profile');
          });
          console.log('Form submitted');
        }
      };
    const validateForm = () => {
      const { f_name, email, p_number, D_O_B, Address } = formData;
  
      if (!f_name || !email || !p_number || !D_O_B || !Address) {
        alert('Please fill in all required fields');
        return false;
      }
  
      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }
  
      // Phone number validation using regex
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(p_number)) {
        alert('Please enter a valid phone number (10 digits)');
        return false;
      }
  
      // Add additional validation logic if needed
  
      return true;
    };

        return (
            <div className="container-A">
              <h1 style={{marginLeft:'40vw'}}>Profile</h1>
                  <img src={formData.imageUrl} alt='profile' style={{marginLeft:'40vw', width:'10vw'}}/>
                  <form className="form-contain" onSubmit={onSubmit}>
                    <div className="input-box">
                      <div className="input-div" style={{marginBottom:'5px'}}>Full Name</div>
                      <input type="text"
                      className="input"
                      name="f_name"
                      placeholder="Enter Name"
                      value={formData.f_name}
                      onChange={handleInputChange}/>
                    </div>

                    <div className="input-box" style={{marginBottom:'15px'}}>
                      <div className="input-div" style={{marginBottom:'5px'}}>Email</div>
                      <input type="text"
                      className="input"
                      name="email"
                      placeholder="123@example.com"
                      value={formData.email}
                      onChange={handleInputChange} required/>
                      </div>

                      <div className="input-box" style={{marginBottom:'15px'}}>
                      <div className="input-div" style={{marginBottom:'5px'}}>NIC</div>
                      <input type="text"
                      className="input"
                      name="NIC"
                      placeholder="Enter Bill Number"
                      value={formData.NIC}
                      onChange={handleInputChange} />
                      </div>

                      <div className="input-box" style={{marginBottom:'15px'}}>
                      <div className="input-div" style={{marginBottom:'5px'}}>Phone Number</div>
                      <input type="text"
                      className="input"
                      name="p_number"
                      placeholder="Enter Contact Number"
                      value={formData.p_number}
                      onChange={handleInputChange} required/>
                      </div>

                      <div className="input-box" style={{marginBottom:'15px'}}>
                      <div className="input-div">Date Of Birth</div>
                      <input type="text"
                      className="input"
                      name="Address"
                      placeholder="Enter Your Inquiry"
                      value={formData.Address}
                      onChange={handleInputChange} required="required"/>
                      </div>

                      <div className="input-box" style={{marginBottom:'15px'}}>
                      <div  className="input-div" style={{marginBottom:'5px'}}>Town/city</div>
                      <input type="text"
                      className="input"
                      name="D_O_B"
                      placeholder="Enter Your Inquiry"
                      value={formData.D_O_B}
                      onChange={handleInputChange} required="required"/>
                      </div>

                      <div className="input-box" style={{marginBottom:'15px'}}>
                      <div  className="input-div" style={{marginBottom:'5px'}}>profile picture</div>
                      <input type="file" onChange={handleImageChange} className='o-input'></input>
                      </div>

                      <button className="btn btn-success" type="submit" style={{marginTop:'15px',marginLeft:'5vw'}} onClick={onSubmit}>
                      <i className="far fa-check-square"></i>
                      &nbsp;Save
                      </button>
                
                  </form>
            </div>
        )
}
export default AddProfile;