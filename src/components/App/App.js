import './App.css';
import React, { useEffect, useState } from 'react';
import Tricks from '../Tricks/Tricks';
import { callTricks } from '../../apiCalls/apiCalls';

// component imports
// api calls
// tricks state

function App() {
  useEffect(()=>{
    callTricks()
    .then((r)=>{
      console.log(r)
    })
  },[])
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
