import './App.css';
import React, { useState } from 'react';
import Tricks from '../Tricks/Tricks';

// component imports
// api calls
// tricks state

function App() {
  const [trick, setTricks] = useState([])
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {/* form component */}
      <Tricks/>
    </div>
  );
}

export default App; 
