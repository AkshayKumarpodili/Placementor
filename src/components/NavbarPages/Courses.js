import React,{useState} from 'react';
import { Button,Form, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import Loader from './Loader';


const Courses = () => {
 
    
  const [error, setError] = useState(""); 
  const [isloading, setIsLoading] = useState(false); 
  const navigate=useNavigate();

  const getUsers = () => {
  
  }
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {

      let courses = {};
      var d1 = document.getElementById("d1");  
      var d2 = document.getElementById("d2");
      var d3 = document.getElementById("d3");
      var d4 = document.getElementById("d4");
      var d5 = document.getElementById("d5");
      var d6 = document.getElementById("d6");
      if(d1.checked)
        courses.cone= d1.value
      if(d2.checked)
        courses.ctwo= d2.value
      if(d3.checked)
        courses.cthree = d3.value
      if(d4.checked)
        courses.cfour= d4.value
      if(d5.checked)
        courses.cfive = d5.value
      if(d6.checked)
        courses.six = d6.value      
      
    
      const loginUsername = localStorage.getItem("loginUsername");
      await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),courses);      
      navigate('/internships');
          
    } catch (err) {
    setError(err.message);
    console.log("err = ",err.message);
   }

  };

  return (
    <div className='q'>
       <div className="p-4 box">
        <h2 className="mb-3">Register Courses</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Check  type="checkbox" id="d1" label="Smart Interviews" value="Smart Interviews"/>
            <Form.Check  type="checkbox" id="d2" label="Machine Learning" value="Machine Learning"/>
            <Form.Check  type="checkbox" id="d3" label="React Js" value="React Js" />
            <Form.Check  type="checkbox" id="d4" label="Node Js" value="Node Js" />
            <Form.Check  type="checkbox" id="d5" label="Artificial Intelligence" value="Artificial Intelligence" />
            <Form.Check  type="checkbox" id="d6" label="Python" value="Python" />
        </Form.Group>
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Register </Button> </div>
        </Form>
        </div>
    </div>
    
  )

}


export default Courses;