import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    handleClick=(counter)=>{
        this.setState(({counter})=>({
            counter:counter+1
        }))
    }
    
  render() {
    if(this.state.counter===5){
        throw new Error("Application Issue!!!!")
    }
    return (
      <>
         <button onClick={this.handleClick}>Clicked:{this.state.counter}</button>
      </>
    )
  }
}
