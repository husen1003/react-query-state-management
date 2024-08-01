import React from "react";
import { useCounter } from "../utils/counter";

const Counter = () => {
  const [count] = useCounter();
  return <>the count is: {count}</>;
};

export default Counter;
