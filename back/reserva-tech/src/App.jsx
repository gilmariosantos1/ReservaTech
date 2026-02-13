import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Reserva from './components/Reserva'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </>
  )
}

export default App
