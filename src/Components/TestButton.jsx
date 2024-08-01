import React from "react";
import { useCounter } from "../utils/counter";

const TestButton = () => {
  const [count, setCount, resetCount] = useCounter();
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>
        <button onClick={increaseCount}>Inc</button>
      </div>
      <div>
        <button onClick={decreaseCount}>Dec</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default TestButton;
