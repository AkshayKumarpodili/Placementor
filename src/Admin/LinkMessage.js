import React,{useState} from 'react';
import {Form,Button,Alert} from 'react-bootstrap';
import { collection, addDoc,getDocs } from 'firebase/firestore';
import { db } from '../firebase';




function LinkMessage() {

    const [quest1, setQuest1] = useState("");
    const [msg, setMsg] = useState("");
    const [link, setLink] = useState("");
    const [error, setError] = useState("");


    const addnews = async () => {
  
      const UserObj={quest1, msg, link};
      const snapshot = await getDocs(collection(db, 'TandPAdmin'));
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("data = ",data);

      for(var i=0;i<data.length;i++)
      {
        const UseridInTandP = data[i].id;
        console.log("id = ",UseridInTandP);
        //admin adding on news to 'linknews' collection to every user in 'TandPDb' collection
        await addDoc(collection(db,`TandPDb/${UseridInTandP}/linknews`),UserObj);  
      }
      
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try {
           addnews();
        } catch (err) {
            alert(err.message);
            setError(err.message)
        }
        setQuest1("");
        setMsg("");
        setLink("");
        setError("");
    }

  return (
    <div>
            {error&&<Alert variant="danger">{error}</Alert>}
            <Form className='mt-3' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Enter QUESTION"  value={quest1} onChange={(e) => setQuest1(e.target.value)} />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRole">
                        <Form.Control type="text" placeholder="Enter Message" as="textarea" rows={3}  value={msg} onChange={(e) => setMsg(e.target.value)}  />
                      
                    </Form.Group>  

                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Control type="text" placeholder="Enter Link"   value={link} onChange={(e) => setLink(e.target.value)}  />
                        
                    </Form.Group> 
                    <div className="d-grid gap-2 w-75 m-auto"> <Button variant="primary" type="Submit">Add</Button> </div>

           </Form>
    </div>
  )
}

export default LinkMessage