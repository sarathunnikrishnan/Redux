import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const timeRef = useRef();
    const inputRef = useRef();
    const [time, setTime] = useState(0)

    const startTimer = () => {
       timeRef.current = setInterval(()=>{
             setTime(state => state + 1)
       },1000)
    }

const stopTimer = () => {
   clearInterval(timeRef.current)
}
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div>
        <div>
        <h1>Timer {time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        </div>
        <br/>
        <div>
          <input ref={inputRef} type='text' />
        </div>
    </div>
  )
}

export default UseRef