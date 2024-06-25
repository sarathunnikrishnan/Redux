import React from "react";
import { useCount, useForm } from "./CreateCustomHook";

const CustomHook = () => {
  const [count, countHandlerIncrease, countHandlerDecrease] = useCount();

  const [value, formHandler] = useForm({
    name : '',
    email : ''
  })

  console.log(value);

  return (   
    <div>
      <h1>CustomHook</h1>
      <div>
        <h4>Counter is {count}</h4>
        <button onClick={countHandlerIncrease}>Increase Count</button>
        <button onClick={countHandlerDecrease}>Decrease Count</button>
      </div>
      <h1>Create Form Using Custom Hook</h1>
      <div>
        <input type="text" name="name" value={value.name} placeholder="Name"  onChange={formHandler}/>
        <input type="text" name="email" value={value.email}  placeholder="Email" onChange={formHandler} />
      </div>
    </div>
  );
};

export default CustomHook;
