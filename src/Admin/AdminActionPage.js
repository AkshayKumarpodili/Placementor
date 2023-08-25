import React from 'react';
import {useNavigate } from 'react-router-dom';
import AddOnCampusModal from './AddOnCampusModal';
import AdminNewsFeedModal from './AdminNewsFeedModal';
import AdminPlacementModal from './AdminPlacementModal';


function AdminActionPage() {

  const navigate=useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  const handleTickets = () => {
    navigate('/allqueries');
  }

  
  return (
    
    <div className='q'>
      
        <div className='list-group-item rounded d-flex justify-content-between mb-3'>
          <h3>Admin Action Page</h3>
          <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end' onClick={handleLogout}>Logout</button>
        </div>
      
      <div className="p-4 box">
        <div className="list-group">
            <li className="list-group-item rounded" id='bone'>Want to add OffCampus Opportunity?     
                 <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  data-bs-toggle="modal" data-bs-target="#m1" type='submit'>Click...</button> 
            </li> 
            <li className="list-group-item rounded" id='btwo'>Want to add OnCampus Opportunity?  
                <button className='btn bg-warning text-white pt-0 pb-0 ps-1 pe-1 float-end'  data-bs-toggle="modal" data-bs-target="#m3" type='submit'>Click...</button>
            </li>
            <li className="list-group-item rounded" id='bone'>Want to add NewsFeed?  
                <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  data-bs-toggle="modal" data-bs-target="#m2" type='submit'>Click...</button>
            </li>

            <li className="list-group-item rounded" id='bone'>Want to View All Students Queries?  
                <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  type='submit' onClick={handleTickets}>Click...</button>
            </li>

            <li className="list-group-item rounded" id='bone'>Want to View Students In Database?  
                <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  type='submit' onClick={() => navigate('/students')}>Click...</button>
            </li>

            <li className="list-group-item rounded" id='bone'>Want to View your messages?  
                <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  type='submit' onClick={() => navigate('/messages')}>Click...</button>
            </li>

            <li className="list-group-item rounded" id='bone'>Want to View all students basic details?  
                <button className='btn bg-success text-white pt-0 pb-0 ps-1 pe-1 float-end'  type='submit' onClick={() => navigate('/basic-details')}>Click...</button>
            </li>

          
                         
        </div>
      </div>

      <div>
          <AdminPlacementModal/>
      </div>

      <div>
        <AdminNewsFeedModal/>
      </div>

      <div>
        <AddOnCampusModal/>
      </div>

      
    </div>
  )
}

export default AdminActionPage
