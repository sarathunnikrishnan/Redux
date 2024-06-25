import React, { createContext, useState } from 'react';
import Counter from '../components/usecontext/Counter'


export const counterContext = createContext();


const UseContext = () => {
    const [count, setCount] = useState(0);

    const countHandler = () => {
      setCount(state => state + 1)
    }
  return (
    <div>
        <counterContext.Provider value={[count, countHandler]} >
        <Counter />
        </counterContext.Provider>
    </div>
  )
}

export default UseContext;