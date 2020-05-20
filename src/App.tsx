import React from "react";
import TodosFetching from "./todosFetching";
import "./App.css";

function App() {
  return (
    <span className="appBackground">
      <header>
        <div className="overlay">
          <h2>Todo </h2>
        </div>
      </header>
      <TodosFetching />
    </span>
  );
}

export default App;
