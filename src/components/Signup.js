import { Button,Form , Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import React, {useState} from 'react';
import './Signup.css';



const Signup = () => {

  
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [number,setNumber] = useState("");
    const [Dt, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [rollno, setRollno] = useState("");
   
   

    const navigate = useNavigate();

    const {signUp} = useUserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setName(name);
        setError("");
        try 
        {
            await signUp(email, password);   
            updateProfile(auth.currentUser, {
              displayName: name,
            })
             
              var arr=email.split('@');
              var userId = arr[0];
              const Obj={name,number,email,Dt,rollno,branch};
              await setDoc(doc(db, "TandPAdmin", userId), Obj);
              await setDoc(doc(db, "TandPDb", userId), Obj);
              navigate('/');
  
        }
        
        catch (err) 
        {
          setError(err.message);
        }

        setDate("");
        setName("");
        setBranch("");
        setRollno("");
        setNumber("");
        setEmail("");
        setPassword("");

     };


    


  return (
    <div className='q m-auto'>
      <div className='qwer w-100 mb-2'>
          <div className="bloc-tabs">
            <h3 className='active-tabs1  text-center text-dark font p-3 rounded'>
              SignUp
            </h3>
          </div>
        </div>
      <div className="p-4 vc rounded shadow">
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Control type="text" placeholder="Enter DOB" value={Dt} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBranch">
            <Form.Control type="text" placeholder="Enter Branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRno">
            <Form.Control type="text" placeholder="Enter Rollno" value={rollno} onChange={(e) => setRollno(e.target.value)} />
        </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <PhoneInput  defaultCountry='IN' value={number} onChange={setNumber} placeholder = "Enter Phone Number"/>
                <div id='recaptcha-container'/>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Control type="password"  placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        
        
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> SignUp </Button> </div>
       
        </Form>
     </div>

     <div className="p-4 vc shadow rounded mt-3 text-center"> Already have an account? <Link to="/">Log In</Link> <eyeOff/> </div>
    </div>
  );
};


export default Signup;


