import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';
import { useContext } from 'react';

const AddEmployee = () => {

  const [validated, setValidated] = useState(false);
  const [empId,setEmpId]= useState('');
  const [name,setName]= useState('');
  const [position,setPosition]= useState('');
  const [company,setCompany]= useState('');

  const navigate = useNavigate();

  const{employees, addEmployee} = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
     event.stopPropagation();
    }

    const employee = {id:Date.now() ,empId, name, position, company}
    console.log(employee)
    addEmployee(employee)
    navigate('/')
    setValidated(true);
  };



  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>EMP ID</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Employee ID"
            value={empId}
            onChange={(e)=>setEmpId(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>EMPLOYEE NAME</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-2" style={{marginLeft : '60px', marginTop:'100px'}}>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employee Position"
              aria-describedby="inputGroupPrepend"
              required
              value={position}
              onChange={(e)=>setPosition(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company"
              aria-describedby="inputGroupPrepend"
              required
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Button type="submit">ADD EMPLOYEE</Button>
        </Form>
    </>
  )
}

export default AddEmployee
