import React, { useContext } from 'react'
import myContext from '../MyContext'
const Child2 = () => {
    const {name,surname}=useContext(myContext);
  return (
    <>
    <br/><h3>Inside Child2 data from child1</h3>
    
    Message from contextProvider:<span style={{color:'red'}}>{ name}</span><br/>

    Technology used:<span style={{color:'red'}}>{surname}</span><br/>
      
    </>
  )
}

export default Child2
