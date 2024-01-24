import React, { useContext} from 'react'
import { Button } from 'react-bootstrap'
import './crudStyle.css'
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';

const EmployeeList = () => {
    const navigate = useNavigate()
    const{employees,deleteEmployee} = useContext(EmployeeContext)

    const handleDelete =(id)=>{
      deleteEmployee(id)
    }
  return (
    <div>
            <h5> Employee List</h5>
            <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')}>Add Employee</Button>

            </div>
            <div>
            <table class="table table-success table-striped" style={{marginLeft:'10px', marginRight:'30px', marginTop:'10px'}}>
            <thead>
                <tr> 
                  <th>SR NO</th>
                  <th>EMP ID</th>
                  <th>EMPLOYEE NAME</th>
                  <th>POSITION</th>
                  <th>COMPANY</th>
                  <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
              { employees.map((employee, index) =>(
                  <tr key={employee.id}>
                      <td>{index+1}</td>
                      <td>{employee.empId}</td>
                      <td>{employee.name}</td>
                      <td>{employee.position}</td>
                      <td> {employee.company}</td>
                      <td> <Button variant="primary" size="sm" onClick={()=>navigate(`/editEmployee/${employee.id}`)}>Edit</Button>
                      <Button variant="danger" size="sm" onClick={()=>handleDelete(employee.id)} style={{marginLeft:'10px'}}>Delete</Button>
                      </td>
                  </tr>

              ))}

            </tbody>

          </table>

            </div>
           
    </div>
  )
}

export default EmployeeList;
