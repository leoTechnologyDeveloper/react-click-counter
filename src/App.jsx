
import { useState, usenumClicks } from 'react';
import './App.css'
import Button from './components/Button'
import Number from './components/Number'

function App() {
  
  
  const [numClicks, setnumClicks] = useState(0);

  
  const incrementar = ()=>{
    setnumClicks(numClicks+1);
  }

  const reiniciar = ()=>{
    setnumClicks(0);
  }

  const decrementar = ()=>{
    setnumClicks(numClicks-1);
  } 
  


  return (
    <>
      <div className="app">
        <div className="counter-container">
          <h1>Click Counter </h1>
          <Number numberClicks={numClicks}/>
          <div className="buttonsContainer">
          <Button textButton="Aumentar" handleclick={incrementar} isClicker={true}/>
          <Button textButton="Reiniciar" handleclick={reiniciar} isClicker={false}/>
          <Button textButton="Disminuir" handleclick={decrementar} isClicker={true}/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
