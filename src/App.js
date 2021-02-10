import React, { useState } from 'react';
import './App.css';


function App() {
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
    <h1>Hello Mr Jangra</h1>
    <input/>
    <button>Click me !</button> 
    <ul>
      <li>Hey Baby</li>
      <li>Hey jaan</li>

    </ul>
    </div>
  
  );
}

export default App;
