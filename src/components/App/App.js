import './App.css';
import React, { useEffect, useState } from 'react';
import Tricks from '../Tricks/Tricks';
import { callTricks } from '../../apiCalls/apiCalls';
import Form from '../Form/Form';

function App() {
  const [tricks, setTricks] = useState([])

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
      <Form/>
      <Tricks tricks = {tricks}/>
    </div>
  );
}

export default App; 
