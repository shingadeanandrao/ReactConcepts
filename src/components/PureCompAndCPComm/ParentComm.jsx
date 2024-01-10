import React, { Component } from 'react'
import ChildComm from './ChildComm'
export default class ParentComm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         MessagefromChild:""
      }
    }
    handleData=(Message)=>{
        this.setState({MessagefromChild:Message})
    }
    
  render() {
    
    return (
            <>
              <h2>Parent Comp</h2>
              <h4>Message from Child:{this.state.MessagefromChild}</h4>
              <ChildComm sendDataToParent={this.handleData}/>
            </>
    )
  }
}
