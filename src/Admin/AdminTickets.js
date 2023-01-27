import React,{useState, useEffect} from 'react'
import {collection,query,getDocs, deleteDoc, doc, getDoc,addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {Button} from 'react-bootstrap'
import './Admin.css';
import Loader from '../components/NavbarPages/Loader';

function AdminTickets() {
  

  const [tickets, setTickets] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {

    setIsLoading(true);
    const loginUsername = localStorage.getItem("loginUsername");
    const q = query(collection(db, `TandPAdmin/${loginUsername}/tickets`));
    const userDetails = await getDocs(q);
    console.log(userDetails);
    setTickets(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);  
  };


  const deleteHandler = async (id) => {
      
    const loginUsername = localStorage.getItem("loginUsername");
    await deleteDoc(doc(db, `TandPAdmin/${loginUsername}/tickets/`,id)); 
    //await deleteDoc(doc(db, `TandPDb/${loginUsername}/tickets/`,id)); 
    getTickets();

  };

  const resolveHandler = async (id) => {
    
    const loginUsername = localStorage.getItem("loginUsername");
      const docSnap = await getDoc(doc(db, `TandPAdmin/${loginUsername}/tickets/`,id));       
      console.log("the DeletedDoc is ",docSnap.data()); 
      const docInDb = await getDoc(doc(db, `TandPDb/${loginUsername}/tickets/`,id));
      console.log("Doc In TandPDb = ",docInDb.data());
      await addDoc(collection(db,`TandPDb/${loginUsername}/resolvedTickets`),docSnap.data());
      deleteHandler(id);
     
  };


  return (
    
    <div>
      <div className='text-center'>
       
         
        <h4 className="text-dark font bg-success rounded p-2 mt-2 m-auto w-75">Want to solve a query? </h4>
        <p className='font'>Click below</p>
        <div className='d-flex justify-content-around m-3'>
          <Button variant="dark edit" onClick={getTickets}>Refresh List</Button> </div>
      </div>
       

          {isloading ? (

            <div> <Loader/> </div>
          ) : (

            <>
            
            {
                  tickets.map((val) =>(
                      <div key={val.id} className=' shadow rounded p-2 text-center te'>

                        <div><p  className='fw-bold w text-dark'> {val.title} </p></div>

                         <p className="role">{val.desc}</p>

                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>
                            <p className='text-dark'>PostBy: </p>
                            <p className='text-muted ms-1'>{val.name}</p>
                          </div>

                          <div>                         
                            <Button variant="danger" className="delete" onClick={(e) => resolveHandler(val.id)}>Resolve</Button>
                          </div>

                        </div>
                      </div>
                  ))
                  
              } 
            
            </>


          )}
        
              
    </div>
  )
}

export default AdminTickets