import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { EmployeeContext } from './EmployeeStore';
// import { useContext } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from './employeSlice';
import { UseDispatch } from 'react-redux';

const EditEmployee = () => {
  const [validated, setValidated] = useState(false);
  const [empId,setEmpId]= useState('');
  const [name,setName]= useState('');
  const [position,setPosition]= useState('');
  const [company,setCompany]= useState('');

  const navigate = useNavigate();

  // const{employees,updateEmployee} = useContext(EmployeeContext);

  const employees= useSelector(state=>state.employee.employees)

  const dispatch=useDispatch()

  const {id} =useParams();

  useEffect(()=>{
    const employee = employees.find(emp=>emp.id=== parseInt(id))
    if(employee){
      setEmpId(employee.empId)
      setName(employee.name)
      setPosition(employee.position)
      setCompany(employee.company)
    }
  },[id,employees])

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
     event.stopPropagation();
    }

    const updatedEmployee = {id:parseInt(id) ,empId, name, position, company}
    console.log(updatedEmployee)
    // updateEmployee(parseInt(id),updatedEmployee)
    dispatch(updateEmployee({id:parseInt(id), updatedEmployee}))
    navigate('/')
    setValidated(true);
  }

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleUpdate}>
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
        <Button type="submit">EDIT EMPLOYEE</Button>
        </Form>
    </>
  )
}
export default EditEmployee
