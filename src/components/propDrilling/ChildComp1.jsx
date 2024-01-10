import React from 'react'
import ChildComp2 from './ChildComp2'
const ChildComp1 = (props) => {
  return (
    <>
        <h5>I am In Child Comp</h5>
        {/* Message In Child1 :{props.sendMessage} */}

        <ChildComp2 message={props.sendMessage}/>
    </>
  )
}

export default ChildComp1
