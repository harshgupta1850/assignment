import React, { Component,useState,useEffect } from 'react';
import useCustomHook from './custom.js';

function App(){
  const data = useCustomHook();
  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(0);
  const [roll,setRoll] = useState("101");
  //console.log(nameStateVarible)
  const handleClick= () =>{
    setCount( count +1)
  }
  const handle1= () =>{
    setCount1( count1 -2)
  }
  useEffect(()=>{
    console.log('hi')
  },[count])
  return(
    <React.Fragment>
      <h1> count handle: {data.count}</h1>
      <button onClick={data.handle}>Change</button>
      <h1>count up : {count}</h1>
      <h1>{roll}</h1>
      <button onClick={handleClick}>Change</button>
      <h1>count down : {count1}</h1>
      <h1>{roll}</h1>
      <button onClick={handle1}>Change</button>
    </React.Fragment>
  )
}

export default App;
