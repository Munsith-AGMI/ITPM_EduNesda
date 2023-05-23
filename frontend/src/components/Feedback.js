import React,{useState} from 'react';
import { Nav, NavItem, Button, TabContent, TabPane, Card } from 'reactstrap';
import axios from 'axios';

const Feedback = () => {
    const data = [{
        data1:{
          name: 'S.mala (BSc (Hons))',
          email: 'mala12@gmail.com',
          pNumber: '055324255',
        },
        data2:{
            name: 'A.hirusheka  (BSc (Hons))',
            email: 'hirusheka22@gmail.com',
            pNumber: '0712345678',
          },
        data3:{
            name: 'Y.malik(BSc HRM',
            email: 'mala12@gmail.com',
            pNumber: '055326548',
        },
        data4:{
            name: 'S.yathavan (BSc (Hons))',
            email: 'yathavanqq@gmail.com',
            pNumber: '011452136',
          },
        data5:{
            name: 'M.kasunrajetha  (BSc (Hons))',
            email: 'kasunrajetha561@gmail.com',
            pNumber: '077308565',
        },
        data6:{
            name: 'N.kapela (BSc (Hons))',
            email: 'kapelaca@gmail.com',
            pNumber: '055526932',
          }, 
      }];

    const [activeTab, setActiveTab] = useState('tab1');
    const [reacta, setReact] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pNumber: '',
        reactF: '',
        reason: ''
      });
      const reactCounter1 = () => {
        setReact('Excellent');
      };
      const reactCounter2 = () => {
        setReact('Good');
      };
      const reactCounter3 = () => {
        setReact('Medium');
      };
      const reactCounter4 = () => {
        setReact('Poor');
      };
      const reactCounter5 = () => {
        setReact('VeryBad');
      };
      

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data1.name,
                email:data[0].data1.email,
                pNumber:data[0].data1.pNumber,
                reactF: reacta,
             }
        ));
      };
      const handleInputChange1 = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data2.name,
                email:data[0].data2.email,
                pNumber:data[0].data2.pNumber,
                reactF: reacta,
             }
        ));
      };
      const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data3.name,
                email:data[0].data3.email,
                pNumber:data[0].data3.pNumber,
                reactF: reacta,
             }
        ));
      };
      const handleInputChange3 = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data4.name,
                email:data[0].data4.email,
                pNumber:data[0].data4.pNumber,
                reactF: reacta,
             }
        ));
      };
      const handleInputChange4 = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data5.name,
                email:data[0].data5.email,
                pNumber:data[0].data5.pNumber,
                reactF: reacta,
             }
        ));
      };
      const handleInputChange5 = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => (
            { ...prevFormData, 
                [name]: value,
                name:data[0].data6.name,
                email:data[0].data6.email,
                pNumber:data[0].data6.pNumber,
                reactF: reacta,
             }
        ));
      };
      console.log("=====>>>>>",formData);

        const onSubmit = (e) => {
            e.preventDefault();
    
        axios.post('/feedback/add', formData).then((res) => {
          if (res.data.success) {
            alert('Added Successfully');
            console.log(reacta);
            setFormData({
                name: '',
                email: '',
                pNumber: '',
                reactF: reacta,
                reason: ''
            });
          } else {
            alert('Failed ');
          }
        }).catch((error) => {
            alert('Failed');
        });
        };


    const toggleTab = (tab) => {
        if (activeTab !== tab) {
          setActiveTab(tab);
        }
      };
  return (
    <div>
        <h1 style={{textAlign:'center', marginTop:'1vw'}}>Teachers</h1>
        <div className='container-ff'>
        <Nav tabs className="justify-content-center" >
            
                        <div className='left-c'>
        
                                <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab1' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab1')}
                                        id='CRBtn'
                                    >
                                        Teacher 1
                                    </Button>
                                    </NavItem>
                                    <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab2' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab2')}
                                        id='CRBtn'
                                    >
                                        Teacher 2
                                    </Button>
                                    </NavItem>
                                    <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab3' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab3')}
                                        id='CRBtn'
                                    >
                                        Teacher 3
                                    </Button>
                                    </NavItem>
                                    <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab4' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab4')}
                                        id='CRBtn'
                                    >
                                        Teacher 4
                                    </Button>
                                </NavItem>
                                <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab5' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab5')}
                                        id='CRBtn'
                                    >
                                        Teacher 5
                                    </Button>
                                </NavItem>
                                <NavItem className='navItem'>
                                    <Button
                                        className={activeTab === 'tab6' ? 'activeTab' : ''}
                                        onClick={() => toggleTab('tab6')}
                                        id='CRBtn'
                                    >
                                        Teacher 6
                                    </Button>
                                </NavItem>
                                
                        </div>
                        <div className='right-c'>
                            <h3 style={{backgroundColor:'gray', color:'white'}}>Teacher Details</h3>
                            <TabContent activeTab={activeTab} className='tab-dash' style={{marginTop:'1vw'}} >
                                <TabPane tabId="tab1">
                                <div className="list-group">
                                    <div type="div" className="box-c-list" >
                                        <img src={'https://www.utcswindon.co.uk/wp-content/uploads/2018/04/Ben.jpg'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data1.name}</h6>
                                        <h6 className='input-Text'>{data[0].data1.email}</h6>
                                        <h6 className='input-Text'>{data[0].data1.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                        

                                    </div>
                                </div>
                                </TabPane>

                                {/* teacher 2 */}
                                <TabPane tabId="tab2">
                                <div className="list-group">
                                <div type="div" className="box-c-list" >
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5sS6VgmpwcN-NjMg1Bnc1qwf6XGjbspCqQ&usqp=CAU'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data2.name}</h6>
                                        <h6 className='input-Text'>{data[0].data2.email}</h6>
                                        <h6 className='input-Text'>{data[0].data2.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange1} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab3">
                                <div className="list-group">
                                <div type="div" className="box-c-list" >
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriZ28zKepjLl9PkVDLJTmIa9t1BROIv7D-Q&usqp=CAU'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data3.name}</h6>
                                        <h6 className='input-Text'>{data[0].data3.email}</h6>
                                        <h6 className='input-Text'>{data[0].data3.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange2} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                        
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab4">
                                <div className="list-group">
                                <div type="div" className="box-c-list" >
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh2nBQZ54m1sYHDuboyLhLXQkSLGLVaqI8Q&usqp=CAU'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data4.name}</h6>
                                        <h6 className='input-Text'>{data[0].data4.email}</h6>
                                        <h6 className='input-Text'>{data[0].data4.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange3} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                        

                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab5">
                                <div className="list-group">
                                <div type="div" className="box-c-list" >
                                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMarT0d6aABAa-EspmA2lQ8LJO0hqewE2YCg&usqp=CAU'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data5.name}</h6>
                                        <h6 className='input-Text'>{data[0].data5.email}</h6>
                                        <h6 className='input-Text'>{data[0].data5.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange4} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                        

                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="tab6">
                                <div className="list-group">
                                <div type="div" className="box-c-list" >
                                        <img src={'https://www.umbp.ac.id/wp-content/uploads/2019/04/t20-5.jpg'} alt="Avatar" className="avatar" />
                                        <h6 className='input-Text'>{data[0].data6.name}</h6>
                                        <h6 className='input-Text'>{data[0].data6.email}</h6>
                                        <h6 className='input-Text'>{data[0].data6.pNumber}</h6>
                                        <div className='react'>
                                        <a onClick={reactCounter1} className='react-img'>
                                        <div></div>&#128516;
                                        </a>
                                        <a onClick={reactCounter2} className='react-img'>
                                        &#128522;
                                        </a>
                                        <a onClick={reactCounter3} className='react-img'>
                                        &#128528;
                                        </a>
                                        <a onClick={reactCounter4} className='react-img'>
                                        &#128533;
                                        </a>
                                        <a onClick={reactCounter5} className='react-img'>
                                        &#128551;
                                        </a>
                                        <form onSubmit={onSubmit}>
                                            <h6> Give the Reason</h6>
                                            <input type='text' className='input-Text-a' placeholder='Enter the Reason' 
                                            name='reason' value={formData.reason} onChange={handleInputChange5} /><br/>

                                            <button id="submit" name="submit" className='submit-frm'>Submit</button>
                                        </form>
                                        </div>
                                        

                                    </div>
                                </div>
                                </TabPane>
                            </TabContent>   
                        </div>
                        </Nav>
                        </div>
    </div>
  )
}

export default Feedback