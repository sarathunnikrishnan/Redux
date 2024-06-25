import React, { memo } from 'react'

const Buttons = ({text, countHandeler}) => {
    console.log(text)
  return (
    <div>
        <button onClick={countHandeler}>Count</button>
    </div>
  )
}

export default memo(Buttons)