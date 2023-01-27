import React from 'react';
import { Button,Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";


const Placements = () => {

   
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
        
      let placed = {}
      var p1 = document.getElementById("p1");  
      var p2 = document.getElementById("p2");
      var p3 = document.getElementById("p3");
      var p4 = document.getElementById("p4");
      var p5 = document.getElementById("p5");
      var p6 = document.getElementById("p6");
      if(p1.checked)
        placed.pl1 = p1.value;
      if(p2.checked)
        placed.pl2 = p2.value;
      if(p3.checked)
        placed.pl3 = p3.value;
      if(p4.checked)
        placed.pl4 = p4.value;
      if(p5.checked)
        placed.pl5 = p5.value;
      if(p6.checked)
        placed.pl6 = p6.value;      
      
      
   

      const loginUsername = localStorage.getItem("loginUsername");
      await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),placed);  
  
    
          
    } catch (err) {
    console.log("err = ",err.message);
   
    }
 };

  return (
    <div className='q'>
       <div className="p-4 box">
        <h2 className="mb-3">Companies You Got Placed</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCourse">
            <Form.Check  type="checkbox" id="p1" label="Amazon" value="Amazon"/>
            <Form.Check  type="checkbox" id="p2" label="Google" value="Google"/>
            <Form.Check  type="checkbox" id="p3" label="Oracle" value="Oracle" />
            <Form.Check  type="checkbox" id="p4" label="Microsoft" value="Microsoft" />
            <Form.Check  type="checkbox" id="p5" label="Cognizant" value="Cognizant" />
            <Form.Check  type="checkbox" id="p6" label="Deloitee" value="Deloitee" />
        </Form.Group>

        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Submit </Button> </div>
        </Form>
        </div>
       
    </div>
    
  )

}


export default Placements;