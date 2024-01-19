import React, { useContext} from 'react'
import { Button } from 'react-bootstrap'
import './crudStyle.css'

import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';

const EmployeeList = () => {
    const navigate = useNavigate()
    const{employees} = useContext(EmployeeContext)
  return (
    <div>
            <h5> Employee List</h5>
            <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')}>Add Employee</Button>

            </div>
            <div>

          <table>
            <thead>
                <tr> 
                  <th>SR NO</th>
                  <th>EMP ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>POSITION</th>
                  <th>COMPONY</th>
                </tr>
            </thead>
            <tbody>
              { employees.map((employee, index) =>(
                  <tr key={employee.id}>
                      <td>{index+1}</td>
                      <td>{employee.empId}</td>
                      <td>{employee.name}</td>
                      <td>{employee.position}</td>
                      <td> {employee.compony}</td>
                  </tr>

              ))}

            </tbody>

          </table>

            </div>
           
    </div>
  )
}

export default EmployeeList
