import React from 'react'
import { Button } from 'react-bootstrap'
import './crudStyle.css'

import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {
    const navigate = useNavigate()
  return (
    <div>
            <h5> Employee List</h5>
            <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')}>Add Employee</Button>

            </div>
           
    </div>
  )
}

export default EmployeeList
