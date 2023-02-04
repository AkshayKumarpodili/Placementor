import React,{useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebase';
import Loader from '../components/NavbarPages/Loader';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';





const Messages = () => {

    const [isloading, setIsLoading] = useState(false);
   
  const [news, setNews] = useState([]);
    useEffect(() => {
      getLinkMsg();
    }, []);
  
    const getLinkMsg = async () => {
      setIsLoading(true);
     
      const q = collection(db, "msg");
      const userDetails = await getDocs(q);
      //console.log("MessageId in Messages = ",messageId);

      console.log(userDetails.docs);
      setNews(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    
    };





    const [cnt, setCnt] = useState([]);
    
    useEffect(() => {
      getCnt();
    }, []);
  
    const getCnt = async (id) => {
      
      const q = collection(db, `msg/${id}/rollno`);
      const userDetails = await getDocs(q);
      const data = userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      //console.log(data);
      //setCnt(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));


      //to maintain unique rollno's in the seencount for every message

      for(var i=0;i<data.length;i++)
      {
        for(var j=i+1;j<data.length;j++)
        {
           if(data[i].rno === data[j].rno)
           {
              const userDoc = doc(db, `msg/${id}/rollno`, data[j].id);
              await deleteDoc(userDoc);
           }
        }

      }

      //console.log("dataUnique = ", data);
      setCnt(data);

    };


    const handlecount = async(id) => {

        console.log("id = ",id);  
        getCnt(id);
        
    }


  return (
    <div className='container r'>
    
    <div className='text-center'>
      
       <div className='d-flex justify-content-around'> 
         <Button variant="dark edit" onClick={getLinkMsg}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh</Button>  
       </div>
     </div>

        {isloading ? (
             <div><Loader/></div>
           ) : (

             <div>              
            
              {
                 news.map((val) =>(
                     <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                          
                          <p className='text-dark'>PostBy: admin@vnrvjiet.in </p>

                          <div> <p className='fw-bold w text-dark text-center'> {val.ques} </p> </div>

                        <p className="role text-center">{val.mesg}</p>

                        <div className='right-side'>
                            <Button variant='success' data-bs-toggle="modal" data-bs-target="#m4" type='submit' onClick={(e) => handlecount(val.id)}>SeenCount</Button> 
                          </div>
                    
                     </div>
                 ))
                 
             }  

             
             </div>
             
           )}

           



              <div className="modal fade" id="m4" data-bs-backdrop="static">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h2>SeenCount</h2> 
                          <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
                        </div>

                        <div className='modal-body'>

                            {/* {cnt.length} */}
                        
                        {
                                  cnt.map((val) =>(
                                      <div key={val.id}>
                                          <p className="role text-center">{val.rno}</p>
                                          <br/>
                                      </div>
                                  ))
                 
                        } 


                        </div>
                      </div>
                  </div>
                  </div>     








             
 </div>
  )
}

export default Messages