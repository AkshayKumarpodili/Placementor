import React,{useState,useEffect} from 'react';
import { Button,Form, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import './Courses.css';
import NoInternships from './NoInternships';

const Internships = () => {
  
  
  const [interns, setInterns] = useState([]);
  const navigate=useNavigate();

  const getInterns = async(e) => {

   
    const loginUsername = localStorage.getItem("loginUsername");
    const q = collection(db, `TandPDb/${loginUsername}/internships`);
    const userDetails = await getDocs(q);
    const data = userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    setInterns(data);
    
  }

  useEffect(() => {
    getInterns();
  }, []);
 
  const [error,setError] = useState("");


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setError("");
      const loginUsername = localStorage.getItem("loginUsername");

      var d1 = document.getElementById("c1");  
      var d2 = document.getElementById("c2");
      var d3 = document.getElementById("c3");
      var d4 = document.getElementById("c4");
      var d5 = document.getElementById("c5");
      var d6 = document.getElementById("c6");


       if(d1.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d1.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

      }
        
      if(d2.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d2.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

      }

      if(d3.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d3.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

      }

      if(d4.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d4.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

      }

      if(d5.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d5.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

      }

      if(d6.checked)
      {
        const d1_Obj = {};
        d1_Obj.intern = d6.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/internships`),d1_Obj); 

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
        <Button variant="dark edit" onClick={getInterns}>Refresh page</Button> 
      </div>
    </div>



  {interns.length === 0 ? (

    <div>

      <NoInternships/>

      <div className='q'>
              <div className="p-4 box">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCourse">
                    <Form.Check  type="checkbox" id="c1" label="Fosterate" value="Fosterate"/>
                    <Form.Check  type="checkbox" id="c2" label="JPMC" value="JPMC"/>
                    <Form.Check  type="checkbox" id="c3" label="Oracle" value="Oracle" />
                    <Form.Check  type="checkbox" id="c4" label="Amazon" value="Amazon" />
                    <Form.Check  type="checkbox" id="c5" label="Cognizant" value="Cognizant" />
                    <Form.Check  type="checkbox" id="c6" label="Deloitee" value="Deloitee" />
                </Form.Group>
                <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Register </Button> </div>
                </Form>
                </div>
        </div>

    </div>
    

  ) : (


     <div> 
        <p className="mt-[10px] font-epilogue font-bold text-[20px] text-black text-center"> These are internships done by you...</p>            
            {
                interns.map((val,idx) => (
                    <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>     
                         <div> <p className='fw-bold w text-dark text-center'>{idx+1}. {val.intern} </p> </div>
                    </div>
                ))
                
            } 
      </div>



  )}
  


  </div>
  
    
  )

}


export default Internships;