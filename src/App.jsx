// ESSE ARQUIVO É PARA AS ROTAS
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import PagInicial from './PagInicial'
import Atv1 from './Atv1'
import Atv2 from './Atv2'
import Atv3 from './Atv3'
import './index.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<PagInicial/>} />
      <Route path="/Atv1" element={<Atv1 />} />
      <Route path="/Atv2" element={<Atv2 />} />
      <Route path="/Atv3" element={<Atv3 />} />
    </Routes>
  )
}

export default App
