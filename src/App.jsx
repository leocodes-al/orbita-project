import { Routes, Route, Navigate } from "react-router-dom"

import Header from './components/Header'
import BackgroundImage from './components/Background-img'
import Footer from './components/Footer'

import Hospedagem from './pages/hospedagem/Hospedagem'
import Pacotes from './pages/pacotes/Pacotes'
import Nacionais from './pages/nacionais/Nacionais'
import Internacionais from './pages/internacionais/Internacionais'


function App() {
  return (
    <>
      <Header />

      <BackgroundImage />

      <Routes>
        <Route path="/" element={<Navigate to="/Hospedagem" />} /> {/* Ao acessar o site, Navigate já abre na pagina definida*/}
        <Route path="/hospedagem" element={<Hospedagem />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/nacionais" element={<Nacionais />} />
        <Route path="/internacionais" element={<Internacionais />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

