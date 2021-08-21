// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';


function App() {

  // let msg = 'Hello react world'
  let [msg, setMsg] = useState('Hello react world')
  
  // eslint-disable-next-line
  let [counter,setCounter] = useState(0)


  function changeMsg(_newMsg) {
    // msg = 'hi'
    setMsg(_newMsg)
    console.log(`change message : ${_newMsg}`)
  }

  function increase() {
    setCounter(counter+1);
  }

  function reset() {
    setCounter(0)
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <button onClick={() => { changeMsg('hi') }} > change message 1 </button>
      <button onClick={() => { changeMsg('bye') }} > change message 2 </button>
      <div>
        <h1>The Counter</h1>
        <h3>{counter}</h3>
        <button onClick={increase}> inc </button>
        <button onClick={reset}> reset </button>
      </div>
    </div>

  );
}

export default App;