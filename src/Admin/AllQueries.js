import React, { useEffect, useState } from "react";
import {Table,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserDataService from "../AllOpeartions";


const AllQueries = () => {

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

      
      const getUserIdHandler = (id,name) => {
        localStorage.setItem("qureyId",id);
        localStorage.setItem("queryName",name);
        navigate('/viewqueries');
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
        <th>Action</th>
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
                    onClick={() => getUserIdHandler(doc.id,doc.name)}
                  >
                    View Queries...
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

export default AllQueries