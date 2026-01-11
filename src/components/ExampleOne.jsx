import React from "react";
import { useState } from "react";

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initalCount = 10;
    return initalCount;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleOne;
