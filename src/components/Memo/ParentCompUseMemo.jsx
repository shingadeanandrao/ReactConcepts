import React, {useState} from 'react'
import UseMemoComp from './UseMemoComp'

const ParentCompUseMemo = () => {

    const[count, setCount] = useState(0)

    const incrementCount=()=>{
          setCount(count+1)
    }

  return (
    <>
        <h3> ParentCompUseMemo </h3>
        Count : {count} <button onClick={incrementCount}> Count Increment</button>
        <UseMemoComp number1={10} number2={count}/>
    </>
  )
}

export default ParentCompUseMemo;
