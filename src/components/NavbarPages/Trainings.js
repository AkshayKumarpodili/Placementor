import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Form} from 'react-bootstrap';
import { collection,  addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import './Courses.css';

const Trainings = () => {

  
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      let trainings = {}
      var t1 = document.getElementById("t1");  
      var t2 = document.getElementById("t2");
      var t3 = document.getElementById("t3");
      var t4 = document.getElementById("t4");
      var t5 = document.getElementById("t5");
      var t6 = document.getElementById("t6");
      if(t1.checked)
        trainings.tr1 = t1.value;
      if(t2.checked)
        trainings.tr2 = t2.value;
      if(t3.checked)
        trainings.tr3 = t3.value;
      if(t4.checked)
        trainings.tr4 = t4.value;
      if(t5.checked)
        trainings.tr5 = t5.value;
      if(t6.checked)
        trainings.tr6 = t6.value;      
      
      
      const loginUsername = localStorage.getItem("loginUsername");
      await  addDoc(collection(db,`TandPDb/${loginUsername}/trainings`),trainings); 
      navigate("/placements");

          
    } catch (err) {
    console.log("err = ",err.message);
    }
 };

  return (
    <div className='q'>
       <div className="p-4 box">
        <h2 className="mb-3">Trainings Done</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Check  type="checkbox" id="t1" label="Smart Interviews" value="Smart Interviews"/>
            <Form.Check  type="checkbox" id="t2" label="AWS" value="AWS"/>
            <Form.Check  type="checkbox" id="t3" label="Cyber Security" value="Cyber Security" />
            <Form.Check  type="checkbox" id="t4" label="Full Stack" value="Full Stack" />
            <Form.Check  type="checkbox" id="t5" label="Data Science" value="Data Science" />
            <Form.Check  type="checkbox" id="t6" label="Data Structures and Algorithms" value="Data Structures and Algorithms" />
        </Form.Group>

        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button> </div>
        </Form>
        </div>
       
    </div>
    
  )

}


export default Trainings;