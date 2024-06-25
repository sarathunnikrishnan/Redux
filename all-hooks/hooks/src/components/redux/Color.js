import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import randomColor from 'randomcolor';
import { change_color } from '../../redux-store/ColorSlice/ColorSlice';

const Color = () => {
    const color = useSelector(state => state.color.value);
    const dispatch = useDispatch()

    const colorHandeler = () => {
         dispatch(
            change_color({
                color : randomColor()
            })
         )
    }
   
  return (
    <div>
        <h1 style={{color}}>Change Color</h1>
        <button onClick={colorHandeler}>Click Me</button>
    </div>
  )
}

export default Color