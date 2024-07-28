import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./count";
import Team from "./team";
import Users from "./user";
import Friends from "./friends";
function App() {
  function handleClick() {
    alert("button clicked!");
  }
  const handleClickTwo = () => {
    alert("button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>Core concepts of React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickTwo}>ClickTWuoo</button>
      <button
        onClick={() => {
          alert("third clicked!");
        }}
      >
        Third
      </button>
      <button onClick={addToFive(3)}>Four</button>
    </>
  );
}

export default App;
