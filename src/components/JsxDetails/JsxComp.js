import React from "react";
const JsxComp = ()=>{
    let p=10, q= 20;
    return(
        <div>
            <h3>Welcome to Jsx Component</h3>
            <h4>Addition of two numbers is: {p+q}</h4>
            <h5>{ p>30 ?"P is greater than 30" : "P is smaller than 30"}</h5>
        </div>
    )
}

// const JsxComp = ()=> {

//     return(

//          React.createElement('div',null, React.createElement('h1', null, 'Welcome to html code without jsx'))

//     )

// }

export default JsxComp;