import { Button } from 'react-bootstrap';
import React ,{Component}from 'react';

class CompLifeCycle extends Component {
// 1.Initialization phase
constructor(props){
  super(props)
  console.log("Class Component Constructor");

  this.state={
    name:"Welcome to class comp"
  }
}

// 2.Mounting Phase

static getDerivedStateFromProps(props){
  console.log("Inside getDerivedStateFromProps");
  return null;
}

componentDidMount(){
  console.log("Inside componentDidMount");
}



// Updating Phase
updateName=()=>{
  this.setState({name:"Welcome to react component"});
}

shouldComponentUpdate(){
  console.log('Inside shouldComponentUpdate');
  return false;
}

getSnapshotBeforeUpdate(){
  console.log('Inside getSnapShotBeforeUpdate');
  return null;
}

componentDidUpdate(){
  console.log("Inside componentDidUpdate");
  return null;
}

    render(){
      console.log('Inside render method')
  return (
    <>
        <h1>Class Component life cycle</h1>
        <h2>{this.state.name}:<Button variant="primary" onClick={this.updateName}>UpdateMessage</Button></h2>
      
    </>
  )
}



}
export default CompLifeCycle;
