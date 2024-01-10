import React from 'react'
import ChildComp3 from './ChildComp3'
const ChildComp2 = (props) => {
  return (
    <>
        <h5> I am in Child Comp2</h5>
        {/* Message in Child2 Comp : {props.message} */}
        <ChildComp3 message={props.message}/>
    </>
  )
}

export default ChildComp2
