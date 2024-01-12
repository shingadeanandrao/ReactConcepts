import React, { useState } from 'react'
import MemoComp from './MemoComp'
const MemoParent = () => {

  const[count, setCount] = useState(0)

  const incrementCount=()=>{
        setCount(count+1)
  }

  return (
    <>
        <h3> MemoParent </h3>
        Count : {count} <button onClick={incrementCount}> Count Increment</button>
        <MemoComp name={count}/>
    </>
  )
}

export default MemoParent
