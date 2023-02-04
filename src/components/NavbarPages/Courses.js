import React,{useState,useEffect} from 'react';
import { Button,Form, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import NoCourses from './NoCourses';



const Courses = () => {
 
    
  const [error, setError] = useState(""); 
  
  const [cres, setCres] = useState([]);
  const navigate=useNavigate();

  const getCourses = async(e) => {

   
    const loginUsername = localStorage.getItem("loginUsername");
    const q = collection(db, `TandPDb/${loginUsername}/courses`);
    const userDetails = await getDocs(q);
    const data = userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    setCres(data);
    
  }

  useEffect(() => {
    getCourses();
  }, []);
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      const loginUsername = localStorage.getItem("loginUsername");
    
      var d1 = document.getElementById("d1");  
      var d2 = document.getElementById("d2");
      var d3 = document.getElementById("d3");
      var d4 = document.getElementById("d4");
      var d5 = document.getElementById("d5");
      var d6 = document.getElementById("d6");

      if(d1.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d1.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }
        
      if(d2.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d2.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }

      if(d3.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d3.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }

      if(d4.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d4.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }

      if(d5.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d5.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }

      if(d6.checked)
      {
        const d1_Obj = {};
        d1_Obj.cname = d6.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/courses`),d1_Obj); 

      }
         
      navigate('/home');
          
    } catch (err) {
    setError(err.message);
    console.log("err = ",err.message);
   }

  };

  return (
   <div>

      <div className='text-center mt-2'>
        <div className='d-flex justify-content-around'> 
          <Button variant="dark edit" onClick={getCourses}>Refresh page</Button> 
        </div>
      </div>



    {cres.length === 0 ? (

      <div>

        <NoCourses/>

        <div className='q'>
                <div className="p-4 box">
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

      </div>
      

    ) : (


       <div> 
          <p className="mt-[10px] font-epilogue font-bold text-[20px] text-black text-center"> These are courses done by you...</p>            
              {
                  cres.map((val,idx) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>     
                           <div> <p className='fw-bold w text-dark text-center'>{idx+1}. {val.cname} </p> </div>
                      </div>
                  ))
                  
              } 

        </div>



    )}
    


    </div>
    
  )

}


export default Courses;