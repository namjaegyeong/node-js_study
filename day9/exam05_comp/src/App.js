// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import MyModal from './MyModal';

function App() {
  let [msg,setMsg] = useState('prease login')
  return (
    <div className="App">
      <MyModal title="Login" setMsg={setMsg} />      

      <h5>{msg}</h5>
    </div>


  );
}

export default App;