import React from 'react';
import { toast } from 'react-toastify';
import { useUserAuth } from '../context/UserAuthContext';
import './Home.css';
import {useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




const Home = () => {


 

  let {logOut} = useUserAuth();
  const navigate = useNavigate();
  
  
      const handleSubmit = () => {
     navigate('/companies');
  }

   const handleSubmitFeed = () => {
    navigate('/newsfeed');
 }

 const handleSubmitRes = () => {
  navigate('/resources');
}

const handleSubmitTic = () => {
  navigate('/tickets');
}

const handleSubmitTandP = () => {
  navigate('/TandP');
}
 



  const handleLogOut = async(e) => {
    e.preventDefault();
    try 
     {
        await logOut();
        localStorage.clear();
        toast.success("Logged Out Successfully!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
        
     }

     catch(err) 
     {
        console.log(err.message);
        toast.error("Not Logged Out!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
     }
  }

  const name=localStorage.getItem("name");
  const rl=localStorage.getItem("rollno");
  const email = localStorage.getItem("email");
  


  return (
    <div className='container-fluid main'>
        <div className='shd shadow rounded-3 mt-4'>
            
                <FontAwesomeIcon icon={faUser} className='text-dark p-2' size='4x' />
                  <div className="details">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{rl}</p>

                    
                  
                  </div>
        </div>
        
         
          <div class="list-group q">


          <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={() => navigate('/courses')}>Courses</button>
          </div>  

            <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={() => navigate('/internships')}>Internships</button>
            </div>

            <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={() => navigate('/placements')}>Placements</button>
          </div> 

          <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={() => navigate('/trainings')}>Trainings</button>
          </div>    




            <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmit}>Companies</button>
            </div>  
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmitFeed}>NewsFeed</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
                <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitRes}>Resources</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTandP}>T&P Coordinators</button>
            </div>
            
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTic}>Queries</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={() => navigate('/resolved')}>Resolved Queries</button> 
            </div>
           

             

            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleLogOut}>logOut</button> 
            </div>
          </div>
          
       </div>
  );
};

export default Home;