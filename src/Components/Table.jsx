import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState,useEffect } from 'react';
function StudentTable() {
    const [studentData, setStudentData]=useState([]);
    async function fetchData(){
            const response = await axios('http://localhost:8080/student/getAll');
            setStudentData(response.data);
        }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Roll Number</th>
        </tr>
      </thead>
      <tbody>
      {
        studentData.map((student)=>{
            return(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.rollno}</td>
                </tr>
            )
        })
      }
      </tbody>
    </Table>
  );
}

export default StudentTable;