import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Reserva from './components/Reserva'
import Colaborador from './components/colaborador'


function App() {
  return (
    <>    

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/Colaborador" element={<Colaborador />} />
       
      </Routes> 
    </>
  )
}

export default App
