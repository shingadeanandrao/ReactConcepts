import axios from "axios";
import Table from 'react-bootstrap/Table';
import React,{Component} from "react";
class ApiIntegration extends Component{
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        console.log("Inside componentDidMount")
        this.fetchUserDetails()
    }

    fetchUserDetails= async()=>{
        const userData=await axios.get("https://fakestoreapi.com/users")
        console.log(userData.data)
        this.setState({user : userData.data})

    }
    
    render(){
        return(
            <>
                {/* <div>
                    <h1>ApiIntegration called</h1>
                    {/* <ul>
                        {this.state.user.map((user) => (
                        <li> {user.username} - {user.password}</li>
                            ))}

                    </ul> */}
                {/* </div> */}
    <div className="container">
    <h3> ApiIntegration called</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {this.state.user.map((entry) => (

            <tr >
                <td>{entry.id}</td>
                <td> {entry.name.firstname} </td>
                <td> {entry.name.lastname} </td>
                <td> {entry.username} </td>
                <td> {entry.email} </td>
                <td> {entry.phone} </td>
            </tr>      
        ))}
        
      </tbody>
    </Table>
    </div>
            </>
        )
    }
}
export default ApiIntegration;