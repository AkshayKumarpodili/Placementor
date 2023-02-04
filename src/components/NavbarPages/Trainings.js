import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Form,Alert} from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import NoTrainings from './NoTrainings'
import './Courses.css';

const Trainings = () => {

  
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState(""); 
  const navigate=useNavigate();

  const getTrainings = async(e) => {

   
    const loginUsername = localStorage.getItem("loginUsername");
    const q = collection(db, `TandPDb/${loginUsername}/trainings`);
    const userDetails = await getDocs(q);
    const data = userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setTrainings(data);
    console.log(data);
    
  }

  useEffect(() => {
    getTrainings();
  }, []);
 



  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    
    try {
      const loginUsername = localStorage.getItem("loginUsername");

      var d1 = document.getElementById("t1");  
      var d2 = document.getElementById("t2");
      var d3 = document.getElementById("t3");
      var d4 = document.getElementById("t4");
      var d5 = document.getElementById("t5");
      var d6 = document.getElementById("t6");


      if(d1.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d1.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 

      }
        
      if(d2.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d2.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 

      }

      if(d3.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d3.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 

      }

      if(d4.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d4.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 

      }

      if(d5.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d5.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 

      }

      if(d6.checked)
      {
        const d1_Obj = {};
        d1_Obj.training = d6.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),d1_Obj); 
      }
         
      navigate('/home');

                
    } catch (err) {
    console.log("err = ",err.message);
    setError(err.message);
    }
 };

  return (
        <div>

              <div className='text-center mt-2'>
                <div className='d-flex justify-content-around'> 
                  <Button variant="dark edit" onClick={getTrainings}>Refresh page</Button> 
                </div>
              </div>



                  {trainings.length === 0 ? (

                    <div>

                      <NoTrainings/>

                      <div className='q'>
                              <div className="p-4 box">
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicCourse">
                                          <Form.Check  type="checkbox" id="t1" label="Smart Interviews" value="Smart Interviews"/>
                                          <Form.Check  type="checkbox" id="t2" label="AWS" value="AWS"/>
                                          <Form.Check  type="checkbox" id="t3" label="Cyber Security" value="Cyber Security" />
                                          <Form.Check  type="checkbox" id="t4" label="Full Stack" value="Full Stack" />
                                          <Form.Check  type="checkbox" id="t5" label="Data Science" value="Data Science" />
                                          <Form.Check  type="checkbox" id="t6" label="Data Structures and Algorithms" value="Data Structures and Algorithms" />
                                </Form.Group>
                                <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Register </Button> </div>
                                </Form>
                                </div>
                        </div>

                    </div>
                    

                  ) : (


                    <div> 
                        <p className="mt-[10px] font-epilogue font-bold text-[20px] text-black text-center"> These are trainings done by you...</p>            
                            {
                                trainings.map((val,idx) =>(
                                    <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>     
                                        <div> <p className='fw-bold w text-dark text-center'>{idx+1}. {val.training} </p> </div>
                                    </div>
                                ))
                                
                            } 

                      </div>

                  )}
  
        </div>
  )

}


export default Trainings;