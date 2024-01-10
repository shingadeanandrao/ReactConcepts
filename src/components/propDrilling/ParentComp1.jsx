import React, { useState } from 'react'
import ChildComp1 from './ChildComp1'
const ParentComp1 = () => {
  
  const[message, setMessage] = useState('Welcome to CodeMind Technology')

  return (
    <>
      <h5>I am in Parent Comp</h5>
      
      {/* Message : {message} */}

      <ChildComp1 sendMessage={message}/>
    </>
  )
}

export default ParentComp1
