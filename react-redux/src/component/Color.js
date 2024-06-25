import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_color } from '../redux/color/ColorSlice';
import randomColor from 'randomcolor';

const Color = () => {
   const color = useSelector(state => state.color.value);
   const dispatch = useDispatch()
  
   const colorHandler = () => {
        dispatch(
          change_color({
            color : randomColor()
          })
        )
   }
 
  return (
    <div style={{border: "1px solid black", marginTop: "5px", padding: "10px"}}>
        <h1 style={{color : color}}>Change Color</h1>
        <button onClick={colorHandler}>Click Me</button>
    </div>
  )
}

export default Color