import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter";
import TestButton from "./Components/TestButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello world</div>
      <Counter />
      <TestButton />
    </>
  );
}

export default App;
