import React, { useState } from 'react'

const ConditionalRendComp = () => {
    // const [isLoggedIn,setLoggedIn]=useState(false;)
    const [isLoggedIn] = useState(false);
    // // 1.Conditional rendering using if/else
    // if (isLoggedIn) {
    //     return <Login/>
    // }
    // else{
    //     return <SignUp/>
    // }


    // //2. Conditional Rendering using Variable

    // let rendCompo;

    // if(isLoggedIn){
    //     rendCompo=<Login/>
    // }
    // else{
    //     rendCompo=<SignUp/>
    // }
    // return rendCompo;

    //3.Conditional Rendering using Ternary operator

    return isLoggedIn? <Login/>:<SignUp/>
    
    // //4.Conditional Rendering using Short Circuit

    // return isLoggedIn && <Login/>

}


const Login =()=>{

    return (
    <>
        <h4>Login</h4>
        <p>Username:<input type='text'/></p>
        <p>Password:<input type='text'/></p>
    </>)
}

const SignUp =()=>{

    return (
    <>
        <h4>Sign Up</h4>
        <p>Full Name: <input type='text'/></p>
        <p>Username: <input type='text'/></p>
        <p>Password: <input type='text'/></p>
        <p>Email: <input type='email'/></p>
        <p>Mobile Number: <input type='number'/></p>
    </>)
}


export default ConditionalRendComp
