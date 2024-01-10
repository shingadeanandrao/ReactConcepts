
import React from 'react'

const ChildFCComp = (props) => {
    let childName = 'Anand';

    const sendName=()=>{
      props.sendToParent(childName);
    }
  return (
    <>
        <h2>Child Functional Comp</h2>
        <button type="button" class="btn btn-warning" onClick={sendName}>Send Name to Parent Comp</button>
      
    </>
  )
}

export default ChildFCComp;
