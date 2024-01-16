import React, { useState } from 'react'

const ControlledComp = () => {

    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit=(e)=>{
        alert(` UserName : ${userName} Password: ${password}`)
        e.preventDefault()
    }



  return (
    <>
            <h4> Login Form</h4>

            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='five columns'>
                        <label> User Name</label>
                        <input type='text' placeholder='Enter User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                    </div>

                </div>

                <div className='row'>
                    <div className='five columns' style={{marginTop: "20px"}}>
                        <label> Password</label>
                        <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>

                </div>
                <button type='submit' style={{marginTop: "20px"}}>Login</button>
            </form>
    </>
  )
}

export default ControlledComp;
