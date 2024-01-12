import { useState } from "react";

//useState Hook replaces state and setState inside class component 

const UseStateHook = ()=>{
    //syntax of useState Hook
    // const[State Name, function to update state]=useState(initial Value of state)
    const[name,updateName]=useState('Umesh');

    const[count,updateCount]=useState(0);

    const[person,updatePerson]=useState({name:'Rupesh', age:27});

    const[isLoggedIn,setLoggedIn]=useState(false);

    const[arrayValue,updateArray]=useState([1,2,3,4,5,6]);


    const nameChange=()=>{
        updateName('Nikita');
    }
    const changeCount=()=>{
        updateCount(count+1);
    }

    const changePerson=()=>{
        updatePerson(prePerson => ({...prePerson, name:'Bilal'}))
    }
    const loginStatus=()=>{
        setLoggedIn(true);
    }
    const changeArray=()=>{
        updateArray(arrayVal => ([...arrayVal, 9,8,7,6,4]))
    }
    return(
        <>
            <h2>Use State Hook</h2>
            <p>Name is: {name}</p>
            <button type="button" class="btn btn-primary" onClick={nameChange}>Name Change</button>

            <p>Count is: {count}</p>
            <button type="button" class="btn btn-secondary" onClick={changeCount}>Count</button>

            <p>Person: {JSON.stringify(person)}</p>
            <button type="button" class="btn btn-secondary" onClick={changePerson}>Update Person</button>

            <p>Is Logged In: { isLoggedIn?"yes":"no"}</p>
            <button type="button" class="btn btn-secondary" onClick={loginStatus}>Login Status</button>


            <p>Array elements: { arrayValue.join(',')}</p>
            <button type="button" class="btn btn-secondary" onClick={changeArray}>Update Array</button>

        </>
    )
}
export default UseStateHook;