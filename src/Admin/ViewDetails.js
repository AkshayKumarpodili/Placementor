import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { query, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from '../components/NavbarPages/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import NoCourses from './NoCourses';

const ViewDetails = () => {

  
    const [courses, setCourses] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const crename = localStorage.getItem("detailName");

    useEffect(() => {
        getCourses();
    },[]);
    
        const getCourses = async() => {
           
            const id = localStorage.getItem("detailId");
            console.log(id);
            setIsLoading(true);
            const q = query(collection(db,`TandPDb/${id}/courses`));
            const userDetails = await getDocs(q);
             console.log(userDetails);
            setCourses(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setIsLoading(false);
    
        } 


        



  return (
    <div>
      
    <div className='text-center'>   
        <div className='d-flex justify-content-between w-75 m-auto mb-3 mt-3'>
          <Button variant="dark edit" onClick={getCourses}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh Page</Button>
        </div>
    </div>

    {isloading ? (

<div> <Loader/> </div>

) : (
      
        <>
                          
                  {courses.length === 0 ? (

                     <NoCourses/>

                ) : (

                  <>

                                    <p className="mt-[10px] font-epilogue font-bold text-[20px] text-black text-center"> These are courses done by {crename} </p>            
                                                {
                                                    courses.map((val,idx) =>(
                                                        <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>     
                                                            <div> <p className='fw-bold w text-dark text-center'>{idx+1}. {val.cname} </p> </div>
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

export default ViewDetails