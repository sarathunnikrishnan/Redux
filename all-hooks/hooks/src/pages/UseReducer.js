import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialState = {
          count : 0
    }

    const reducer = (state, action) => {

        switch(action.type){
          case "increase" :
            return { count : state.count+1}
          case "decrease" :
            return { count : 0}
          default :
            return state.count
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>Count is {state.count}</h1>
        <button onClick={()=> dispatch({type : "increase"})}>ADD COUNT</button>
        <button onClick={()=> dispatch({type : "decrease"})}>reset</button>
    </div>
  )
}

export default UseReducer