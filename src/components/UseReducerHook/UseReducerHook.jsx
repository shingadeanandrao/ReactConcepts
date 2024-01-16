import React, { useReducer, useState } from 'react'

const UseReducerHook = () => {


    const reducer = (count, action) =>{

        switch(action){

            case 'add':
                return count+1;
                break;
            
            case 'sub':
                return count-1;
                break;

            case 'reset':
                return 0;
                break;

            default:
                break;

        }

    }

    const[count, dispatch] = useReducer(reducer, 0)

  return (
    <>
        <h2> UseReducer Hook Implementation</h2>
            <br/>
            Count : {count}
            <br/>
        <div>
            <button onClick={()=>dispatch('add')}>ADD</button>
            <button onClick={()=>dispatch('sub')}>SUB</button>
            <button onClick={()=>dispatch('reset')}>RESET</button>
        </div>
    </>
  )
}

export default UseReducerHook
