import './App.css';
import React, { useEffect, useState } from 'react';
import Tricks from '../Tricks/Tricks';
import { callTricks } from '../../apiCalls/apiCalls';

// component imports
// api calls
// tricks state

function App() {
  const [trick, setTricks] = useState([])

  useEffect(()=>{
    callTricks()
    .then((r)=>{
      return r.json()
    })
    .then((data)=>{
      setTricks(data)
    })
  },[])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {/* form component */}
      <Tricks/>
    </div>
  );
}

export default App; 
