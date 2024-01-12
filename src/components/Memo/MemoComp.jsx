import React from 'react'

const MemoComp = (props) => {
  return (
    
    <>
        {console.log('MemoComp Loaded')}

        <h4> MemoComp </h4>

        Name is : {props.name}
    </>
  )
}

//export default MemoComp
export default React.memo(MemoComp)