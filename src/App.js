// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { Reps } from "./components/reps";
import "./App.css";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reps />
      </header>
    </div>
  );
}

export default App;
