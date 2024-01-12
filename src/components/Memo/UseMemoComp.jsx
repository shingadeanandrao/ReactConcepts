import React, { useMemo } from 'react'

const UseMemoComp = ({number1, number2}) => {

    const result = useMemo(()=>{
        console.log('useMemo hook called')
        let sum=0;
        sum = number1+number2;
        return sum

    }, [number1, number2]

    )

  return (
    <>
        <h2>  UseMemoComp </h2>
        Result : {result}
    </>
  )
}

export default UseMemoComp;
