import React from 'react'
import Counter from './Counter'
import Color from './Color'

const Main = () => {
  return (
    <div style={{border: "1px solid black", marginTop: "5px", padding: "10px"}}>
           <Counter />
           <Color />
    </div>
  )
}

export default Main