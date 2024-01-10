import React, { useState } from 'react'

const FormBasic = () => {


   const[firstName, setFirstName] = useState('')
   const[lastName, setLastName] = useState('')
   const[email, setEmail] = useState('') 

  const handleSubmit=(e)=>{
    alert(`First Name : ${firstName} Last Name : ${lastName} Email : ${email}`)
    console.log("Inside handleSubmit")
    e.preventDefault()
  }

  const handleFirstNameChange=(e)=>{
    console.log(e.target.value)
    setFirstName(e.target.value)
  }

  const handleLastNameChange=(e)=>{
    setLastName(e.target.value)
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  return (
    <>
      
      <h2> Form Handling Basic</h2>

      <form onSubmit={handleSubmit}>
            <div>
            First Name: <input type="text" name="" id=""  value={firstName} onChange={handleFirstNameChange}/>
            </div>
            <br/>

            <div>
            Last Name: <input type="text" name="" id=""  value={lastName} onChange={handleLastNameChange}/>
            </div>
            <br/>

            <div>
            Email: <input type="email" name="" id=""  value={email} onChange={handleEmail}/>
            </div>
            <br/>

            <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default FormBasic;
