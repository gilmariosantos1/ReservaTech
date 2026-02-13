import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Reserva from './components/Reserva.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reserva />
  </StrictMode>,
)
