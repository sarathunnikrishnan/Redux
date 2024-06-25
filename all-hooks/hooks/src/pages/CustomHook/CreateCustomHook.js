import  { useState } from 'react'

export function useCount () {
    const [count, setCount] = useState(0);

    const countHandlerIncrease = () => {
        setCount(state => state + 1)
    }

    const countHandlerDecrease = () => {
        setCount(state => state - 1)
    }

    return [ count, countHandlerIncrease, countHandlerDecrease]
}

export const useForm = (initialValue) => {
       const [value, setValue] = useState(initialValue);

       const formHandler = (event) => {
           setValue({
            ...value,
            [event.target.name] : event.target.value
           })
       }

       return [value, formHandler]
}

