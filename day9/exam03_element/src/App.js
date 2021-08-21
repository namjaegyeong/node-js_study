// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let [text, setText] = useState('hello')
  let [text2,setText2] = useState('')

  function onChangeText(evt) {
    console.log(evt);
    setText(evt.target.value)
  }

  return (
    <div className="App">

      <h2>{text}</h2>      

      <input onChange={onChangeText} value={text} />
      <button onClick={ ()=> { setText2(text) } } > ok  </button>
      <h3>{text2}</h3>

    </div>
  );
}

export default App;