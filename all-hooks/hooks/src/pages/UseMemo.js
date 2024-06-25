import React, { useState, useMemo } from 'react';

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const expensiveValue = (count) => {
      let i =0;
        while(i<1000000000){
          i++
        }
        return count * 2
    }
    const memorize = useMemo(()=>expensiveValue(count), [count])
    // const memorize = expensiveValue(count)


  return (
    <div>
        <h1>useMemo Hook Example</h1>
      <p>Count: {count}</p>
      <p>Memoized Value: {memorize}</p>
      <button onClick={()=> setCount(state => state+1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  )
}

export default UseMemo