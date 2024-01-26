import React from 'react'
import { Button } from 'react-bootstrap'
import './crudStyle.css'
import { useNavigate } from 'react-router-dom';
// import { EmployeeContext } from './EmployeeStore';
import {useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from './studentSlice';




const StudentList = () => {

    const navigate = useNavigate()
    // const{employees,deleteEmployee} = useContext(EmployeeContext)
    const students= useSelector(state=>state.student.students);

    const dispatch = useDispatch();

    const handleDelete =(id)=>{
      // deleteEmployee(id)
      dispatch(deleteStudent(id))
    }
  return (

    <>
            <h5> STUDENT LIST</h5>
            <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addStudent')}>Add Student</Button>

            </div>
            <div>
            <table class="table table-success table-striped" style={{marginLeft:'10px', marginRight:'30px', marginTop:'10px'}}>
            <thead>
                <tr> 
                  <th>ID</th>
                  <th>STUDENT ID</th>
                  <th>STUDENT NAME</th>
                  <th>BRANCH</th>
                  <th>PASSING YEAR</th>
                  <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
              { students.map((student, index) =>(
                  <tr key={student.id}>
                      <td>{student.id}</td>
                      {/* <td>{index+1}</td> */}
                      <td>{student.studentId}</td>
                      <td>{student.name}</td>
                      <td>{student.branch}</td>
                      <td> {student.year}</td>
                      <td> <Button variant="primary" size="sm" onClick={()=>navigate(`/editStudent/${student.id}`)}>Edit</Button>
                      <Button variant="danger" size="sm" onClick={()=>handleDelete(student.id)} style={{marginLeft:'10px'}}>Delete</Button>
                      </td>
                  </tr>

              ))}

            </tbody>

          </table>

            </div>
    </>
  )
}
export default StudentList;
