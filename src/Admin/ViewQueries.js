import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import {collection,query,getDocs, deleteDoc, doc, getDoc,addDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {Button} from 'react-bootstrap'
import './Admin.css';
import Loader from '../components/NavbarPages/Loader';
import NoQueries from './NoQueries';

const ViewQueries = () => {


  const [tickets, setTickets] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("qureyId");
       
  
  const deleteHandler = async (id) => {
    
    await deleteDoc(doc(db, `TandPDb/${userId}/tickets/`,id)); 
    getTickets(userId);
  };

  const resolveHandler = async (id) => {
    
    console.log("id in view queries = ",userId);
    //  const docSnap = await getDoc(doc(db, `TandPAdmin/${userId}/tickets/`,id));       
    //   console.log("Doc In TandPAdmin = ",docSnap.data()); 
      const docInDb = await getDoc(doc(db, `TandPDb/${userId}/tickets/`,id));
      console.log("Doc In TandPDb = ",docInDb.data());
      await addDoc(collection(db,`TandPDb/${userId}/resolvedTickets`),docInDb.data());
      deleteHandler(id);
     
  };


  useEffect(() => {
    getTickets();
  }, []);

    const getTickets = async () => {
       
        const id = localStorage.getItem("qureyId");
        setIsLoading(true);
        console.log(id);
        const q = query(collection(db, `TandPDb/${id}/tickets`));
        const userDetails = await getDocs(q);
        setTickets(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(tickets);
        setIsLoading(false);

    } 

  return (

    <div>

        <div className='text-center'>   
        <div className='d-flex justify-content-between w-75 m-auto mb-3 mt-3'>
          <Button variant="dark edit" onClick={getTickets}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page</Button>
        </div>
       </div>


        {isloading ? (

            <div> <Loader/> </div>
            
            ) : (
                  
                    <>
                                      
                              {tickets.length === 0 ? (

                                 <NoQueries/>

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

                    </>

                    )}

    </div>
  )
}

export default ViewQueries