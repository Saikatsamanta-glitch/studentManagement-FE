import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
function StudentForm() {
    const [name,setName]= useState('');
    const [rollno,setRollno] = useState(null);

    const handleSubmit = async() => {
        const response = await axios.post('http://localhost:8080/student/add',{
            name,
            rollno
        }) 
        console.log(response);   
        toast.success(response.data);    
    }

  return (
    <Form className='w-50 m-auto' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value) } />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>RollNo</Form.Label>
        <Form.Control type="number" placeholder="Roll number" onChange={(e)=> setRollno(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  );
}

export default StudentForm;