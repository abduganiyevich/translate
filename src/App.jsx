import { useState,useRef } from 'react'
import Textarea from './components/Textarea'
import './App.css'
import Button from './components/Button';
import Select from './components/Select';
function App() {
  const[inputState,setInputState]=useState('uz')
  const[outputState,setOutputState]=useState('en')
const input=useRef('');
const output=useRef('');
function handleClick() {
  alert('5')
}
function handleChangeInput() {
  
}
function handleChangeOutput() {
  
}
  return (
    <div className='container'>
     
      <div className='area'>

     <div>
     <Select change={handleChangeInput}/>
     <Textarea inputRef={input} placeholder='Enter words...'/>
     </div>

     <div>
     <Select change={handleChangeOutput}/>
     <Textarea  inputRef={output} placeholder='translation'/>
     </div>
      </div>
      <Button click={handleClick}/>
    </div>
  )
}

export default App
