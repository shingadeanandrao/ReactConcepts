import React, { useState } from 'react'
import ChildCmp1 from './ChildCmp1';
import ClassComponent from './ClassComponent';
import myContext from './MyContext';

const ParentCompUseContext = () => {
    
    const[message, setMessage] = useState('Welcome to CodeMind Technology!!!')
    const[name, setName] = useState('Anandrao')

  return (
    <>
        <h5> I am in ParentCompUseContext!!!!</h5>

        <myContext.Provider value={{message, name}}>
             {/* <ChildCmp1/>, */}
             <ClassComponent/>

        </myContext.Provider>

        
       
    </>
  )
}

export default ParentCompUseContext
