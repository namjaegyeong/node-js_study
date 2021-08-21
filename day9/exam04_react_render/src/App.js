import './App.css';
import { useState } from 'react'

function App() {
  return (
    <div className="App">  
    <MyModal />    
    </div>
  );
}
//컴포넌트 
function MyModal() {
  let [bShowModal, bShowModal_set] = useState(true)
  return (
    <div>
      {
        bShowModal ?
        <div className="box" >
          <h1>model dlg</h1>
          <button onClick={() => { bShowModal_set(false) }}  >[X]</button>
        </div> :
        null
      }
    </div>
  )
}

export default App;