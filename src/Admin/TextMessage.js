import React,{useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import { collection, addDoc,getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function TextMessage() {

    const [ques, setQues] = useState("");
    const [mesg, setMesg] = useState("");
    const [error, setError] = useState("");

    const addtextnews = async () => {
  
        const UserObj={ques, mesg};
        const snapshot = await getDocs(collection(db, 'TandPAdmin'));
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log("data = ",data);
  
        for(var i=0;i<data.length;i++)
        {
          const UseridInTandP = data[i].id;
          console.log("id = ",UseridInTandP);
          //admin adding on news to 'news' collection to every user in 'TandPDb' collection
          await addDoc(collection(db,`TandPDb/${UseridInTandP}/textnews`),UserObj);  
        }
        
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try 
        {
            addtextnews();
        } catch (err) {
            setError(err.message)
        }


       
        setQues("");
        setMesg("");
        setError("");
    }

  return (
    <div>
    {error&&<Alert variant="danger">{error}</Alert>}
    <Form className='mt-3' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Enter Query" required value={ques} onChange={(e) => setQues(e.target.value)} />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
                <Form.Control type="text" placeholder="Enter Message" as="textarea" rows={3} required value={mesg} onChange={(e) => setMesg(e.target.value)}  />
              
            </Form.Group>  

            <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

   </Form>
</div>
  )
}

export default TextMessage