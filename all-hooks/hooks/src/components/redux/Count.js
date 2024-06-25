import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase_count } from '../../redux-store/CountSlice/CountSlice';

const Count = () => {

  const count = useSelector(state => state.count.value)
  const dispatch = useDispatch();

  const countHandler = () => {
    dispatch(increase_count())
  }
   
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={countHandler}>AddCount</button>
    </div>
  )
}

export default Count