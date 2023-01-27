import React,{useState,useEffect} from 'react';
import './CssFiles/News.css';
import UserDataService from '../AllOpeartions';
import { collection, getDocs,query, } from 'firebase/firestore';
import { db } from '../firebase';
import Loader from'../components/NavbarPages/Loader';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


export default function Newsfeed() { 

  const [vote1,setVote1] = useState(0);
  const [vote2,setVote2] = useState(0);
  const [vote3,setVote3] = useState(0);
  const [vote4,setVote4] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  const [Linknews, setLinkNews] = useState([]);
    useEffect(() => {
      getLinkMsg();
    }, []);
  
    const getLinkMsg = async () => {
      setIsLoading(true);
      const loginUsername = localStorage.getItem("loginUsername");
      const snapshot = await UserDataService.getAllUsers();
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
      data.map(async(doc) => {
  
      const q = query(collection(db, `TandPDb/${loginUsername}/linknews`));
      const userDetails = await getDocs(q);
      console.log(userDetails);
      setLinkNews(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
  
      })   
    };



    const [textnews, setTextNews] = useState([]);
    useEffect(() => {
      getTextMsg();
    }, []);
  
    const getTextMsg = async () => {

      setIsLoading(true);
      const loginUsername = localStorage.getItem("loginUsername");
      const snapshot = await UserDataService.getAllUsers();
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
      data.map(async(doc) => {
  
      const q = query(collection(db, `TandPDb/${loginUsername}/textnews`));
      const userDetails = await getDocs(q);
      console.log(userDetails);
      setTextNews(userDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
  
      })   
    };


  
  
  
  return (
  <div className='container r'>
     <h2 className='text-center hd bg-success rounded text-white p-2 m-3'>T&P NewsFeed</h2> 


     <div className='text-center'>
       
        <div className='d-flex justify-content-around'> 
          <Button variant="dark edit" onClick={getTextMsg}><FontAwesomeIcon icon={faArrowsRotate} /> Text Msg</Button> 
          <Button variant="dark edit" onClick={getLinkMsg}><FontAwesomeIcon icon={faArrowsRotate} /> Link Msg</Button>  
        </div>
      </div>

         {isloading ? (
              <div><Loader/></div>
            ) : (

              <div>              
              {
                  Linknews.map((val) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                           
                           <p className='text-secondary'>PostBy: admin@vnrvjiet.in </p>

                           <div> <p className='fw-bold w text-dark text-center'> {val.quest1} </p> </div>

                         <p className="role text-center">{val.msg}</p>
                     
                        <div className='d-flex justify-content-between'>
                          <div className='d-flex'>

                            <a href={val.link}>Click Here...</a>
                          </div>
                        </div>
                      </div>
                  ))
                  
              } 



              {
                  textnews.map((val) =>(
                      <div key={val.id} className='shadow rounded mt-3 mb-2 ms-2 me-2 p-3 '>
                           
                           <p className='text-dark'>PostBy: admin@vnrvjiet.in </p>

                           <div> <p className='fw-bold w text-dark text-center'> {val.ques} </p> </div>

                         <p className="role text-center">{val.mesg}</p>
                     
                      </div>
                  ))
                  
              } 

              
              </div>
              
            )}
              
  </div>
  )
}


