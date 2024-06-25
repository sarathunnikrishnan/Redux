import React, { useContext } from 'react'
import { counterContext } from '../../pages/UseContext';


const Counter = () => {
      const data = useContext(counterContext);

      const count = data[0]
      const countHandler = data[1];
  return (
    <div>
        <h1>Count is {count}</h1> 
        <button onClick={()=>countHandler()}>ADD</button>
    </div>
  )
}

export default Counter