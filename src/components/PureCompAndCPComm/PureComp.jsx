import React, { Component, PureComponent } from 'react'

// export default class PureComp extends Component

class PureComp extends PureComponent{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    incrementCount=()=>{
        // this.setState({count:this.state.count})
        this.setState({count:this.state.count+1})
    }
    
  render() {
    console.log("Inside render !!")
    return (
      <>
        <h2>Pure Component</h2>
        <h4>Count:{this.state.count} - <button type="button" class="btn btn-warning" onClick={this.incrementCount}> + </button></h4>
      </>
    )
  }

//   shouldComponentUpdate(){
//     console.log("Inside shouldComponentUpdate ")
//     return true;
//   }

  getSnapshotBeforeUpdate(){
    console.log('Inside getSnapShotBeforeUpdate');
    return null;
  }
  
  componentDidUpdate(){
    console.log("Inside componentDidUpdate");
    return null;
  }

  static getDerivedStateFromProps(props){
    console.log("Inside getDerivedStateFromProps");
    return null;
  }
  
}
export default PureComp;
