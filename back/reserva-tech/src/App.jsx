import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import HomeMenu from './components/HomeMenu'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homemenu" element={<HomeMenu />} />
      </Routes>
    </>
  )
}

export default App
