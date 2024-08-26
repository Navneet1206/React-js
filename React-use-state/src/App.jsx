import React from "react";
import Cll from "./components/Cll";
import { useState } from "react";
import "./App.css"
function App() {
  const  [count, setCount] = useState(0)
  return (
    <>
    <Cll />
      <h1>Count = {count}</h1>
     <button className="button" onClick={()=>{setCount(count+1)}}>click me</button>
     <button className="button" onClick={()=>{setCount(0)}}>Reset</button>
    </>
  );
}

export default App;
