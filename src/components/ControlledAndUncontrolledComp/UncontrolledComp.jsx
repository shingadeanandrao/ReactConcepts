import React from 'react'

const UncontrolledComp = () => {

    const userNameRef = React.createRef()
    const passwordRef = React.createRef()

   const handleSubmit=(e)=>{
        alert(` UserName : ${userNameRef.current.value} Password: ${passwordRef.current.value}`)
        e.preventDefault()
    }
  return (
    <>

<h4> Login Form 2</h4>

<form onSubmit={handleSubmit}>
    <div className='row'>
        <div className='five columns'>
            <label> User Name</label>
            <input type='text' placeholder='Enter User Name' ref={userNameRef}></input>
        </div>

    </div>

    <div className='row'>
        <div className='five columns' style={{marginTop: "20px"}}>
            <label> Password</label>
            <input type='password' placeholder='Enter Password' ref={passwordRef}></input>
        </div>

    </div>
    <button type='submit' style={{marginTop: "20px"}}>Login</button>
</form>
      
    </>
  )
}

export default UncontrolledComp;
