import { Button } from "react-bootstrap";
import { Component } from "react";

class EventBinding extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"Anand"
      }
    }

    // userNameChange(){
    //     console.log(this.state.userName);
    //     console.log("Inside Name change")
    // }

    userNameChange=()=> {
        console.log(this.state.userName);
    }
    

    render(){
        return(
            <>
                <h1>Inside Event Binding Class</h1>
                <h5> Name is: {this.state.userName}</h5>

                <Button variant="primary" onClick={this.userNameChange.bind(this)}>UserChange</Button>
                {/* Event binding using Arrow function */}

                <Button variant="primary" onClick={this.userNameChange}>NameChange</Button>
    
                
            </>
        )
    }
}
export default EventBinding;