import React,{useState,useEffect} from 'react';
import { Button,Form,Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import { db } from '../../firebase';
import  NoPlacements from './NoPlacements';
import { collection, addDoc, getDocs } from "firebase/firestore";


const Placements = () => {

   
  const [placements, setPlacements] = useState([]);
  const [error, setError] = useState(""); 
  const navigate=useNavigate();

  const getPlacements = async(e) => {

   
    const loginUsername = localStorage.getItem("loginUsername");
    const q = collection(db, `TandPDb/${loginUsername}/placements`);
    const userDetails = await getDocs(q);
    const data = userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPlacements(data);
    console.log(data);
    
  }

  useEffect(() => {
    getPlacements();
  }, []);

    const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    
    try {
        
      const loginUsername = localStorage.getItem("loginUsername");


      var d1 = document.getElementById("p1");  
      var d2 = document.getElementById("p2");
      var d3 = document.getElementById("p3");
      var d4 = document.getElementById("p4");
      var d5 = document.getElementById("p5");
      var d6 = document.getElementById("p6");


      if(d1.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d1.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 

      }
        
      if(d2.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d2.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 

      }

      if(d3.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d3.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 

      }

      if(d4.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d4.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 

      }

      if(d5.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d5.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 

      }

      if(d6.checked)
      {
        const d1_Obj = {};
        d1_Obj.offer = d6.value;
        await  addDoc(collection(db,`TandPDb/${loginUsername}/placements`),d1_Obj); 
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
              <Button variant="dark edit" onClick={getPlacements}>Refresh page</Button> 
            </div>
          </div>



                  {placements.length === 0 ? (

                    <div>

                      <NoPlacements/>

                      <div className='q'>
                              <div className="p-4 box">
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicCourse">
                                    <Form.Check  type="checkbox" id="p1" label="Amazon" value="Amazon"/>
                                    <Form.Check  type="checkbox" id="p2" label="Google" value="Google"/>
                                    <Form.Check  type="checkbox" id="p3" label="Oracle" value="Oracle" />
                                    <Form.Check  type="checkbox" id="p4" label="Microsoft" value="Microsoft" />
                                    <Form.Check  type="checkbox" id="p5" label="Cognizant" value="Cognizant" />
                                    <Form.Check  type="checkbox" id="p6" label="Deloitee" value="Deloitee" /> 
                                </Form.Group>
                                <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> Register </Button> </div>
                                </Form>
                                </div>
                        </div>

                    </div>
                    

                  ) : (


                    <div> 
                        <p className="mt-[10px] font-epilogue font-bold text-[20px] text-black text-center"> These are offers you have got...</p>            
                            {
                                placements.map((val,idx) =>(
                                    <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>     
                                        <div> <p className='fw-bold w text-dark text-center'>{idx+1}. {val.offer} </p> </div>
                                    </div>
                                ))
                                
                            } 

                      </div>

                  )}

          </div>
    
  )

}


export default Placements;