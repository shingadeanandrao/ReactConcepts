import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { updateStudent } from './studentSlice';
import { useEffect } from 'react';

const EditStudent = () => {

    const [validated, setValidated] = useState(false);
    const [studentId,setStudentId]= useState('');
    const [name,setName]= useState('');
    const [branch,setBranch]= useState('');
    const [year,setYear]= useState('');
  
    const navigate = useNavigate()

    const students= useSelector(state=>state.student.students)
  
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
      const student = students.find(emp=>emp.id=== parseInt(id))
      if(student){
        setStudentId(student.studentId)
        setName(student.name)
        setBranch(student.branch)
        setYear(student.year)
      }
    },[id,students])
  

    const handleUpdate = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
       event.stopPropagation();
      }
  
      const updatedStudent = {id:parseInt(id) ,studentId, name, branch, year}
      console.log(updatedStudent)
      // updateEmployee(parseInt(id),updatedEmployee)
      dispatch(updateStudent({id:parseInt(id), updatedStudent}))
      navigate('/studentList')
      setValidated(true);
    }
  
  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleUpdate}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>STUDENT ID</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e)=>setStudentId(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>STUDENT NAME</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label>Branch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter branch"
              aria-describedby="inputGroupPrepend"
              required
              value={branch}
              onChange={(e)=>setBranch(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a branch.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label> PASSING YEAR</Form.Label>
            <Form.Control
              type="text"
              placeholder="YEAR"
              aria-describedby="inputGroupPrepend"
              required
              value={year}
              onChange={(e)=>setYear(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a year.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Button type="submit">EDIT STUDENT</Button>
        </Form>
      
    </>
  )
}

export default EditStudent
