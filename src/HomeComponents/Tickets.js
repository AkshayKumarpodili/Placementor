import React,{useState, useEffect} from 'react'
import TicketModalSample from './TicketModal';
import {Button} from 'react-bootstrap'
import './CssFiles/Tickets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import image3 from '../images/icon.png';
import Loader from '../components/NavbarPages/Loader';
import { collection,query,getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import NoTickets from '../components/NoTickets';



function Tickets() {
  
  const [tickets, setTickets] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {

    setIsLoading(true);
    const loginUsername = localStorage.getItem("loginUsername");
    const q = query(collection(db, `TandPDb/${loginUsername}/tickets`));
    const userDetails = await getDocs(q);
    console.log(userDetails);
    setTickets(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);  
  };
  



  return (
    
    <div>
      <div className='text-center'>
        <h4 className="text-dark font bg-success rounded p-2 mt-2 m-auto w-75">Want to raise a query? </h4>
        <p className='font'>Click below</p>
        <div className='d-flex justify-content-between w-75 m-auto mb-3'>
          <Button variant="dark edit" onClick={getTickets}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page</Button>
        </div>
      </div>


      {isloading ? (

        <div> <Loader/> </div>

      ) : (

          <>
             {tickets.length === 0 ? (

                    <NoTickets/>

             ) : (

                <>
                
                    {
                      tickets.map((val) =>(
                          <div key={val.id} className=' shadow rounded p-2 text-center te'>
                            <div>
                            <p  className='fw-bold w text-dark'> {val.title} </p>
                        
                            </div>
                            <p className="role">{val.desc}</p>
                            <div className='d-flex justify-content-between'>
                              <div className='d-flex'>
                              <p className='text-dark'>PostBy: </p>
                              <p className='text-muted ms-1'>{val.name}</p></div>
                              
                            </div>
                          </div>
                      ))
                      
                    } 
                
                </>

             )}
                
          </>

      )}
       
        <img  className="timg float-end p-2 m-3 bg-warning zoom21" data-bs-toggle="modal" data-bs-target="#m4" src={image3} alt='modal' />
       
       <div>
          <TicketModalSample/>
      </div>

    </div>
  )
}

export default Tickets