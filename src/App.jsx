import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reserva from './components/Reserva'
import Equipamento from './components/Equipamento'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {/*
        <Reserva/>
       */}
       <Equipamento />
      </div>
    </>
  )
}

export default App
