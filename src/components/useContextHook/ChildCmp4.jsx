import React, { useContext } from 'react'
import myContext from './MyContext'

const ChildCmp4 = () => {
    const {message,name} = useContext(myContext)
  return (
    <>
         <h5> Inside ChildCmp4</h5>

         Message Directly from Parent Comp : {message}
         Name from Parent Comp : {name}
    </>
  )
}

export default ChildCmp4
