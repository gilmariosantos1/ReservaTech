import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Reserva from './components/Reserva'
import Colaborador from './components/Colaborador'
import HomeMenu from './components/HomeMenu'
import Equipamento from './components/Equipamento'
import ConsultaReserva from './components/ConsultaReserva'

function App() {
  return (
    <>    

      <Routes>

        <Route path="/ConsultaReserva" element={<ConsultaReserva />} />
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/Colaborador" element={<Colaborador />} />
        <Route path="/Equipamento" element={<Equipamento />} />
        <Route path="/HomeMenu" element={<HomeMenu />} />


      </Routes> 
    </>
  )
}

export default App
