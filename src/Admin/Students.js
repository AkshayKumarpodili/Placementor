import React, { useEffect, useState } from "react";
import {Table,Button} from "react-bootstrap";
import UserDataService from "../AllOpeartions";

const Students = () => {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

 
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
            <th>RollNo</th>
            <th>Branch</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.rollno}</td>
                <td>{doc.branch}</td>
                <td>{doc.email}</td>              
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Students;