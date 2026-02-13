import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reserva from './components/Reserva'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Reserva/>
      </div>
    </>
  )
}

export default App
