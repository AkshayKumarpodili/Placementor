import React,{useState} from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes,Route } from 'react-router-dom';
import {Row, Col } from 'react-bootstrap';
import "./App.css";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import PhoneSignUp from './components/PhoneSignUp';
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
import AdminPlacementModal from './Admin/AdminPlacementModal';
import AdminNewsFeedModal from './Admin/AdminNewsFeedModal';
import NavbarData from './components/NavbarData';
import AboutUs from './components/NavbarPages/AboutUs';
import ContactUs from './components/NavbarPages/ContactUs';
import AllQueries from './Admin/AllQueries';
import ViewQueries from './Admin/ViewQueries';
import { useNavigate } from 'react-router-dom';



function App() {

  const [userId,setUserId] = useState("");
  const navigate = useNavigate();

  const getUserIdHandler = (id,name) => {
  console.log("ChildId = ",id);
  console.log("name = ",name);
  setUserId(id);
  navigate('/viewqueries');
}

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
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/TandP" element={<TandPCordinators />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path="/adminactionpage" element={<AdminActionPage />} />
            <Route path="/adminplacementmodal" element={<AdminPlacementModal />} />
            <Route path="/adminnewsmodal" element={<AdminNewsFeedModal />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/resolved" element={<ResolvedQueries />} />
            <Route path="/allqueries" element={<AllQueries getUserIdHandler={getUserIdHandler} />} />
            <Route path="/viewqueries" element={<ViewQueries userId={userId}/>} />
           
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