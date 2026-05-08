import { Routes, Route, Navigate } from "react-router-dom"

import Header from './components/Header'
import BackgroundImage from './components/Background-img'
import Footer from './components/Footer'

import Hospedagem from './pages/hospedagem/Hospedagem'
import Pacotes from './pages/pacotes/Pacotes'


function App() {
  return (
    <>
      <Header />

      <BackgroundImage />

      <Routes>
         <Route path="/" element={<Navigate to="/Hospedagem" />} /> {/* Ao acessar o site, já vai automaticamente para pagina hospedagem*/}
        <Route path="/hospedagem" element={<Hospedagem />} />
        <Route path="/pacotes" element={<Pacotes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

