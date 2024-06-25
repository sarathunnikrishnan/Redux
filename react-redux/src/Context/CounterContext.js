import React, { useState } from 'react'
import Counter from '../component/Counter'
import { createContext } from 'react';


export const CountContext = createContext();

const CounterContext = () => {
   const [count, setCount] = useState(0);

  return (
    <div>
        <h1>CounterContext</h1>
        <CountContext.Provider value={[count, setCount]}>
        <div>
            <Counter />
        </div>
        </CountContext.Provider>
    </div>
  )
}

export default CounterContext
