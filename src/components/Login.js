import {Link, useNavigate} from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { db } from '../firebase';
import { doc,getDoc } from 'firebase/firestore';
import GoogleButton from 'react-google-button';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
    
  
  //this is start(15-34)
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //this logIn in below line is accessible via useUserAuth() in UseAuthContext.js file
  const {logIn} = useUserAuth();
  const {googleSignIn} = useUserAuth();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

    if(email === "admin@vnrvjiet.in" && password === "AdminLogin123")
    {
            navigate('/adminactionpage');
    }

    else
    {
      try {
         
        await logIn(email, password);
        
            var arr=email.split('@');
            var userId = arr[0];
            localStorage.setItem("loginUsername",userId);

            const docRef = doc(db, "TandPDb", userId);
            const docSnap = await getDoc(docRef);
           

            if (docSnap.exists()) {
              
              var rl=docSnap.data().rollno;
              var username = docSnap.data().name;
              var useremail = docSnap.data().email;
              localStorage.setItem("rollno",rl);
              localStorage.setItem("name",username);
              localStorage.setItem("email",useremail);
              localStorage.setItem("loginUsername",userId);
              
              navigate('/home');
            } else {
              console.log("No such Document!");
            }
            
        }
         
     catch(err) {
      setError(err.message);
      console.log("err = ",err.message);
    }

    }
    
};


const handleNumberSubmit = async(e) => {
  e.preventDefault();
  try {
    navigate('/phonesignup');
  } catch (error) {
    alert("Wrong");
  }
}



  return (
    
    <div className='q'>

      <div className="p-4 rounded vc ">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} >

      
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <div className="d-grid gap-2  w-50 m-auto"> <Button variant="primary" type="Submit">Login <FontAwesomeIcon className='ms-2' icon={faRightToBracket} />  </Button>   </div>
         
        </Form>

        <hr />
        
        <Button className="d-grid gap-2  mt-3 w-50 m-auto" onClick={handleNumberSubmit}> Phone SignIn </Button>
      
      </div>

      <div className="p-4 mt-3 text-center rounded vc "> 
          Don't have an account? <Link to="/signup">Sign up</Link>
          <hr/>
          <p> <Link to='/forgotpassword'> ForgotPassword? </Link> </p>
       
      </div>
    </div>


  );
};

export default Login;