import React, { useCallback, useState } from 'react'
import Counter from '../components/usecallback/Counter'
import Buttons from '../components/usecallback/Buttons'


const UseCallback = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);


    const countHandelerOne = useCallback(()=> {
        setCountOne(state => state + 1)
    },[])

    const countHandelerTwo = useCallback(()=> {
        setCountTwo(state => state + 1)
    },[])
  return (
    <div>
        <h1>UseCallback Sample</h1>
        <div>
            <Counter text="Counter Page One" count={countOne} />
            <Buttons text="button Page One" countHandeler={countHandelerOne}/>
            <Counter text="Counter Page Two" count={countTwo} />
            <Buttons text="button Page Two" countHandeler={countHandelerTwo}/>
        </div>
    </div>
  )
}

export default UseCallback