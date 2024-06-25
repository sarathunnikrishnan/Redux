import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../../redux-store/GetData/GetDataSlice';

const DataFetch = () => {

    const dispatch = useDispatch();
    const info = useSelector(state => state)

    useEffect(()=>{
        dispatch(getInfo);   
    },[dispatch])

    console.log(info)

  return (
    <div>
        <h1>DataFetch</h1>
    </div>
  )
}

export default DataFetch