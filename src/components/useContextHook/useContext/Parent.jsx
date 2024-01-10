import React from 'react';
import myContext from '../MyContext';
import Child1 from './Child1';
import Child3 from './Child3';

const Parent = (props) => {
    const{name,surname}=props;
  return (
    <div>
       <br/><h3>I am parent component</h3> 
      <myContext.Provider value={{name,surname}}>
        <Child1/>,<Child3/>
      </myContext.Provider>
    </div>
  )
}

export default Parent;
