import React,{useState,useEffect} from 'react';
import {Table,Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import UserDataService from '../AllOpeartions';


const AllBasicDetails = () => {


  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
    
    useEffect(() => {
      getUsers();
    }, []);

    const getUsers = async () => {
        const data = await UserDataService.getAllUsers();
        console.log(data.docs);
        setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };


      //to view courses
      const getDetails = async(id,name) => {
        console.log("getDetailsId = ",id);
        localStorage.setItem("detailId",id);
        localStorage.setItem("detailName",name);
        navigate('/viewdetails');
      }

      const getInternships = async(id,name) => {
        console.log("getDetailsId = ",id);
        localStorage.setItem("internId",id);
        localStorage.setItem("internName",name);
        navigate('/viewinternships');
      }

      const getTrainings = async(id,name) => {
        console.log("getDetailsId = ",id);
        localStorage.setItem("trainingId",id);
        localStorage.setItem("trainingName",name);
        navigate('/viewtrainings');
      }

      const getOffers = async(id,name) => {
        console.log("getDetailsId = ",id);
        localStorage.setItem("offerId",id);
        localStorage.setItem("offerName",name);
        navigate('/viewoffers');
      }





  return (
     <div className="table-responsive mt-5 w-75 m-auto">
      
    <h3>Students Data</h3>
    <Button variant="dark edit" onClick={getUsers}>
      Refresh List
    </Button>
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>ID</th>
        <th>Courses</th>
        <th>Internships</th>
        <th>Trainings</th>
        <th>Placements</th>
      </tr>
    </thead>
    <tbody>
      {students.map((doc, index) => {
        return (
          <tr key={doc.id}>
            <td>{index + 1}</td>
            <td>{doc.name}</td>
            <td>{doc.id}</td>
            <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={() => getDetails(doc.id,doc.name)}>
                    View Courses...
                  </Button>
            </td> 

            <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={() => getInternships(doc.id,doc.name)}>
                    View Internships...
                  </Button>
            </td> 

            <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={() => getTrainings(doc.id,doc.name)}>
                    View Trainings...
                  </Button>
            </td> 


            <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={() => getOffers(doc.id,doc.name)}>
                    View offers...
                  </Button>
            </td> 



          </tr>
        );
      })}
    </tbody>
  </Table>
</div>
  )
}

export default AllBasicDetails