import React, { useCallback } from 'react'

const UseCallbackHook = () => {

    const handleClick = useCallback(
        ()=>{
            console.log('Button Clicked')
        }, []
    )
  return (
    <>

        <h3> UseCallBack Hook</h3>

        <br/>
        <button onClick={handleClick}> Click</button>

    </>
  )
}

export default UseCallbackHook
