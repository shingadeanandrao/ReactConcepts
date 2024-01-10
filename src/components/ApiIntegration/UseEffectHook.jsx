import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffectHook = () => {

    //After React virsion 16.8 in fucntional comp we use hooks to replace class comp 
    //(Class comp - state) - (Func Comp - useState)
    //(Class Comp - componentdidMount) - (Func Comp - useEffect)

    //Syntax of useEffect Hook
    // useEffect(()=>{
        
    //     callback function
    // }, [dependency array]);

    const[count, setCount] = useState(0)
    const[name, setName] = useState("Anand")

    //Case-1- No dependency array to useEffect Hook
    // useEffect(()=>{

    //     console.log("Use Effect Hook call on every render")
    // });

   // // Case-2- Empty dependency array to useEffect Hook
    useEffect(()=>{

        console.log("Use Effect Hook calls on only initial render")
    }, []);

    ////Case-3 - Pass value to dependency array
    // useEffect(()=>{

    //     console.log("Use Effect Hook calls only on count changed render")
    // }, [count]);

    const increamentCount =()=>{
        setCount(count+1)
    }
    const nameChange=()=>{
        setName("Sarika")
    }
  return (
    <>
      <h3> Functional comp useEffect Hook</h3>
      <h4> Count : {count} - <Button variant="info" onClick={increamentCount}>+</Button></h4>

      <h4> Name : {name} - <Button variant="success" onClick={nameChange}>Change Name</Button></h4>
    </>
  )
}

export default UseEffectHook;
