import React, {memo} from 'react'

const Counter = ({text, count}) => {
    console.log(text)
  return (
    <div>
        <h4>{text}</h4>
        <h3>Count is : {count}</h3>
    </div>
  )
}

export default memo(Counter)