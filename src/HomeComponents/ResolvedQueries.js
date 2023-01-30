import React,{useState, useEffect} from 'react'
import {collection,query,getDocs} from 'firebase/firestore';
import { db } from '../firebase';
import {Button} from 'react-bootstrap'
import Loader from '../components/NavbarPages/Loader';
import NoResolvedQueries from '../components/NoResolvedQueries';


const ResolvedQueries = () => {
  
  const [tickets, setTickets] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {

    setIsLoading(true);
    const loginUsername = localStorage.getItem("loginUsername");
    const q = query(collection(db, `TandPDb/${loginUsername}/resolvedTickets`));
    const userDetails = await getDocs(q);
    console.log(userDetails);
    setTickets(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);  
  };
  
  return (

    <div>
      <div className='text-center'>
       

        <h4 className="text-dark font bg-success rounded p-2 mt-2 m-auto w-75">Resolved Queries ! </h4>
        <p className='font'>Click below</p>
        <div className='d-flex justify-content-around m-3'>
          <Button variant="dark edit" onClick={getTickets}>Refresh List</Button> </div>
      </div>
       

          {isloading ? (

            <div> <Loader/> </div>
          ) : (

            <>



              {tickets.length === 0 ? (

                <NoResolvedQueries/>

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

export default ResolvedQueries