import React, {useState } from 'react';
import {Form,Alert,Button} from 'react-bootstrap'
import { db } from '../firebase';
import {collection,addDoc} from 'firebase/firestore';

function TicketModalSample() {

    const [error, setError] = useState("");
    const [desc, setDesc] = useState("");
    const [name,setName] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");

        try {
            const TicketModal={name,title,desc};
            const loginUsername = localStorage.getItem("loginUsername");
            //user is adding his own queries to his 'tickets' collection and as well as 'TandPAdmin' collection
            await addDoc(collection(db,`TandPDb/${loginUsername}/tickets`),TicketModal);  
            await addDoc(collection(db,`TandPAdmin/${loginUsername}/tickets`),TicketModal);  
            console.log("TicketModal = ",TicketModal);
        
        } catch (err) {
            console.log("err in pl = ",err.message);
            setError(err.message);
        }

        setName("");
        setTitle("");
        setDesc("");
    }


  return ( 
    <div className="modal fade" id="m4" data-bs-backdrop="static">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
          <div className="modal-header">
           <h2>Add Query</h2> 
            <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
          </div>
          
          <div className="modal-body">
          {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>  

            <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control type="text" placeholder="Enter Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </Form.Group>    

            <div className="d-grid gap-2"> <Button variant="primary" type="Submit">Add</Button> </div>
            <div className="d-grid gap-2"> <Button className="btn btn-danger" data-bs-dismiss="modal">Cancel</Button> </div>

           </Form>                  
          </div>
       
      </div>
    </div>
</div>

  );
}

export default TicketModalSample;