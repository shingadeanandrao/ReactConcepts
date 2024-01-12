// /*import React from "react"; or*/ import { Fragment } from "react";

// fragment will enclose the all elements and avoid creating unnecessary node(div) in DOM


// const FragmntComp = ()=>{
//     return(
//         <div>
//             <h1>Welcome to fragment Componemt</h1>
//             <h2>Welcome to fragment Componemt</h2>
//             <h3>Welcome to fragment Componemt</h3>
//         </div>
//     )
// }


// const FragmntComp = ()=>{
//     return(
//         <React.Fragment>
//             <h1>Welcome to fragment Componemt</h1>
//             <h2>Welcome to fragment Componemt</h2>
//             <h3>Welcome to fragment Componemt</h3>
//         </React.Fragment>
//     )
// }



// const FragmntComp = ()=>{
//     return(
//         <Fragment>
//             <h1>Welcome to fragment Componemt</h1>
//             <h2>Welcome to fragment Componemt</h2>
//             <h3>Welcome to fragment Componemt</h3>
//         </Fragment>
//     )
// }




const FragmntComp = ()=>{
    return(
        <>
            <h1>Welcome to fragment Componemt</h1>
            <h2>Welcome to fragment Componemt</h2>
            <h3>Welcome to fragment Componemt</h3>
        </>
    )
}
export default FragmntComp;