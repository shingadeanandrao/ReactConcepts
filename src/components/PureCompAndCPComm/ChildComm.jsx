import React, { Component } from 'react'

export default class ChildComm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message:"Welcome To React"
      }
    }
    sendMessage=()=>{
        this.props.sendDataToParent(this.state.Message);
    }
  render() {
    return (
      <>
        <h2>Child Comp</h2>
        <button type="button" class="btn btn-warning" onClick={this.sendMessage}>Send Data to Parent Comp</button>
      </>
    )
  }
}
