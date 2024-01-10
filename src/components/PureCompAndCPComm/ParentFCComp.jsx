import React, { useState } from 'react'
import ChildFCComp from './ChildFCComp'

const ParentFCComp = () => {
    let [name,setName] = useState('');

    const getFromChild=(childName)=>{
        setName(childName);
    }
  return (
    <>
      <h2>Parent Functional Component</h2><br/>
      <h4>Name from child:{name}</h4><br/>
      <ChildFCComp sendToParent={getFromChild}/>
    </>
  )
}

export default ParentFCComp
