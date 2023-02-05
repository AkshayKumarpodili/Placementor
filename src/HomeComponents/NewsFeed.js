import React,{useState,useEffect} from 'react';
import './CssFiles/News.css';
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from'../components/NavbarPages/Loader';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';



export default function Newsfeed() { 

  
  const [isloading, setIsLoading] = useState(false);


    const [textnews, setTextNews] = useState([]);
    useEffect(() => {
      getTextMsg();
    }, []);
  
    const getTextMsg = async () => {

      setIsLoading(true);
      const documents = collection(db, "msg");
      const data = await getDocs(documents);

      console.log(data.docs);
      const ans = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTextNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(ans);
      setIsLoading(false);
      
    
    };


    const handleMark = async(id) => {

      console.log("MarkId = ",id);
      const rno = localStorage.getItem("rollno");
      console.log("rno = ",rno);
      const RnoObj = {rno};
      await addDoc(collection(db, `msg/${id}/rollno/`),RnoObj);
      
    }
  

    

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
     <h2 className='text-center hd bg-success rounded text-white p-2 m-3'>T&P NewsFeed</h2> 


     <div className='text-center'>
        <div className='d-flex justify-content-around'> 
          <Button variant="dark edit" onClick={getTextMsg}><FontAwesomeIcon icon={faArrowsRotate} /> Refresh page</Button> 
        </div>
      </div>

         {isloading ? (
              <div><Loader/></div>
            ) : (

              <div>              
              {
                  textnews.map((val) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                           
                           <p className='text-dark'>PostBy: admin@vnrvjiet.in </p>

                           <div> <p className='fw-bold w text-dark text-center'> {val.ques} </p> </div>

                         <p className="role text-center">{val.mesg}</p>

                         <div className='right-side'>
                            <Button variant='success'   onClick={() => handleMark(val.id)}>Mark As Read</Button> &nbsp;
                            <Button variant='success'  data-bs-toggle="modal" data-bs-target="#m4" onClick={() => handlecount(val.id)}>SeenCount</Button> &nbsp;
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
                        <h2>Seen By</h2>
                          <button className="btn-close btn-danger" data-bs-dismiss="modal"></button>
                        </div>

                        <div className='modal-body'>

                            {cnt.length === 0 ? (

                                      <p className="mt-[0px] font-epilogue font-bold text-[20px] text-black text-center"> No one seen this message yet...</p>

                               ) : (

                                <>
                                        {
                                            cnt.map((val) =>(
                                              
                                                <div key={val.id}>
                                                    <p className="role text-center">{val.rno}</p>
                                                    <br/>
                                                </div>
                                            ))
                                        } 

                                </>



                            )}
                        
                        

                        </div>
                      </div>
                  </div>
                  </div>
              
  </div>
  )
}


