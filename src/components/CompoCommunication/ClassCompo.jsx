
import React,{ Component } from "react";

class ClassCompo extends Component{
    render() {
       console.log(this.props);
       const {myname,company,employeeObj}=this.props;
        return(
            <>
                <h1>Class Compo Communication</h1>
                <h2> MyName:{myname}</h2>
                <h2>Company:{company}</h2>
                EmployeeDetails:{JSON.stringify(employeeObj)}
            </>
        )
    }
}
export default ClassCompo;