import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrap">
        <div className="inputWrap">
          <input type="text" />
          <button>TODO</button>
        </div>
      </div>
    </>
  )
}

export default App
