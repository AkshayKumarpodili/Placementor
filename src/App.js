import React from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes,Route } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';
import "./App.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import ForgotPassword from './components/ForgotPassword';
import DefaultPage from './components/DefaultPage';
import Courses from './components/NavbarPages/Courses';
import ResolvedQueries from './HomeComponents/ResolvedQueries';
import Trainings from './components/NavbarPages/Trainings';
import Placements from './components/NavbarPages/Placements';
import Internships from './components/NavbarPages/Internships';
import Companies from './HomeComponents/companies';
import OnCampus from './HomeComponents/OnCampus';
import Resources from './HomeComponents/Resources';
import TandPCordinators from './HomeComponents/T&PCordinators';
import Students from './Admin/Students';
import NewsFeed from './HomeComponents/NewsFeed';
import Tickets from './HomeComponents/Tickets';
import AdminActionPage from './Admin/AdminActionPage';
import NavbarData from './components/NavbarData';
import AboutUs from './components/NavbarPages/AboutUs';
import ContactUs from './components/NavbarPages/ContactUs';
import AllQueries from './Admin/AllQueries';
import ViewQueries from './Admin/ViewQueries';
import Messages from './Admin/Messages';
import AllBasicDetails from './Admin/AllBasicDetails';
import ViewDetails from './Admin/ViewDetails';
import ViewOffers from './Admin/ViewOffers';
import ViewInternships from './Admin/ViewInternships';
import ViewTrainings from './Admin/ViewTrainings';




function App() {


  return (
  <div>
    <NavbarData/>
    
    <div className='container-fluid'>
      
    <Row>
      <Col>
        <UserAuthContextProvider>       
          <Routes>
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/oncampus" element={<OnCampus />} />
            <Route path="/students" element={<Students />} />
            <Route path="/newsfeed" element={<NewsFeed/>} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/TandP" element={<TandPCordinators />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path="/adminactionpage" element={<AdminActionPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/resolved" element={<ResolvedQueries />} />
            <Route path="/allqueries" element={<AllQueries />} />
            <Route path="/viewqueries" element={<ViewQueries />} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/basic-details" element={<AllBasicDetails />} />
            <Route path="/viewdetails" element={<ViewDetails />} />
            <Route path="/viewoffers" element={<ViewOffers />} />
            <Route path="/viewinternships" element={<ViewInternships />} />
            <Route path="/viewtrainings" element={<ViewTrainings />} />
          </Routes>
          <ToastContainer />
        </UserAuthContextProvider>  
      </Col>
    </Row>
  </div>  
 
  </div>  
)
}

export default App;