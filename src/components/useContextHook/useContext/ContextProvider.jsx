
import React, { useState } from 'react'
import Parent from './Parent';

const ContextProvider = () => {
    const [name]=useState('Welcome to Multiple Child structure');
    const [surname]=useState('ReactJS');

  return (
    <>
      <h2>I am Data Provider Component</h2>
      <Parent name={name} surname={surname}/>
    </>
  )
}

export default ContextProvider;
