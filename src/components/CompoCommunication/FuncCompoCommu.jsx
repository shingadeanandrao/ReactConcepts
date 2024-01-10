import React from 'react'

const FuncCompoCommu = (props) => {

    const {myname,company,employeeObj}=props;
  return (
    <>
        <h2>Functional compo communication</h2>
        <h3> MyName:{myname}</h3>
        <h3>Company:{company}</h3>
        EmployeeDetails:{JSON.stringify(employeeObj)}
      
    </>
  )
}

export default FuncCompoCommu
