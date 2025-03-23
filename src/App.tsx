import  { useState } from 'react'
import './App.css'
import Button from './Button'

function App(){
  const [Counter, setCounter] = useState<number>(0);

  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1);
  }

  const subtractValue = () => {
    setCounter((prevCounter) => prevCounter - 1 );
  }

  return(
    <>
    <h1>Value Counter</h1>
    <h2> Counter Value = {Counter}</h2>
    <Button addValue={addValue} subtractValue={subtractValue}/>
    </>
  )
}
  
   

export default App
