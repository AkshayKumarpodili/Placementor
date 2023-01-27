import React from 'react'
import {Form,Button,Alert} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';

function AddOnCampusModal() {

    const [error, setError] = useState("");
    const [role, setRole] = useState("");
    const [title, setTitle] = useState("");
    const [skills,setSkills] = useState([]);
    const [lpa, setPackage] = useState("");
    const [cgpa,setCgpa] = useState("");
    

  
  
      const addoncampus = async () => {
  
        const UserObj={title,role,skills,cgpa};
        const snapshot = await getDocs(collection(db, 'TandPAdmin'));
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log("data = ",data);
  
        for(var i=0;i<data.length;i++)
        {
          const UseridInTandP = data[i].id;
          console.log("id = ",UseridInTandP);
          //admin adding oncampus opportunities to 'OnCampusCompanies' collection to every user in 'TandPDb' collection
          await addDoc(collection(db,`TandPDb/${UseridInTandP}/OnCampusCompanies`),UserObj);  
        }
        
      };


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");

        try {
            addoncampus();
        } catch (err) {
            console.log("err in pl = ",err.message);
            setError(err.message);
        }

        setTitle("");
        setRole("");
        setCgpa("");
        setSkills("");
        setPackage("");
    }


  return (
    <div className="modal fade" id="m3" data-bs-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
          <div className="modal-header">
           <h2>On Campus</h2> 
            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>
          
          <div className="modal-body">
          {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Company Name" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPackage">
                <Form.Control type="text" placeholder="Enter Package" value={lpa} onChange={(e) => setPackage(e.target.value)} />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Control type="text" placeholder="Enter Role" value={role} onChange={(e) => setRole(e.target.value)} />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter CGPA" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
            </Form.Group> 

            
            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter Skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </Form.Group> 

           

            <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

           </Form>                  
          </div>
        <div className="modal-footer">
            <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
</div>
  )
}

export default AddOnCampusModal