import { useState } from "react";

export function Counter(){

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  return(
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
}