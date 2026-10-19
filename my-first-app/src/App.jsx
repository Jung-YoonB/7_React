import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First App</h1>

      <p>Count : {count}</p>
      <button onClick={()=>setCount(count + 1)}
        style={{width: '150px', color: 'steelblue', backgroundColor: 'white'}}>+</button>
    </>
  )
}

export default App
