import React from 'react'

const SampleLazy = () => {
    let count = 0;
    (function() {
        for (let i = 0; i < 100000000; i++) {
          count = i;
        }
      })();
  return (
    <div>
        <h1>Sample Load Component</h1>
        {count}
    </div>
  )
}

export default SampleLazy