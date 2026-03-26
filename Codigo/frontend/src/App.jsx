import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Reserva from './pages/Reserva'
import Colaborador from './pages/Colaborador'
import HomeMenu from './pages/HomeMenu'
import Equipamento from './pages/Equipamento'
import EditarEquipamento from './pages/EditarEquipamento'
import ConsultarReserva from'./pages/ConsultarReserva'
import EditarReserva from './pages/EditarReserva'


function App() {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/Reserva" element={<Reserva />} />
        <Route path="/EditarReserva"element={<EditarReserva />}/>
        <Route path="/Colaborador" element={<Colaborador />} />
        <Route path="/Equipamento" element={<Equipamento />} />
        <Route path="/HomeMenu" element={<HomeMenu />} />
        <Route path="/EditarEquipamento" element={<EditarEquipamento />} />
        <Route path="/ConsultarReserva" element={<ConsultarReserva />} />
      </Routes>      
    </>
  )
}
export default App
