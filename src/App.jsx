import { Routes, Route, Navigate, useLocation } from "react-router-dom"

import Header from './components/Header'
import BackgroundImage from './components/Background-img'
import Footer from './components/Footer'

import Hospedagem from './pages/hospedagem/Hospedagem'
import Pacotes from './pages/pacotes/Pacotes'
import Nacionais from './pages/nacionais/Nacionais'
import Internacionais from './pages/internacionais/Internacionais'
import Passagens from './pages/passagens/Passagens'
import Ofertas from './pages/ofertas/Ofertas'
import Ver from './pages/vermais/Vermais'

import Login from "./pages/login/Login"


function App() {

  const location = useLocation()

  const isLoginPage = location.pathname === "/login"

  return (
    <>
      <Header />

      {!isLoginPage && <BackgroundImage />}

      <Routes>
        <Route path="/" element={<Navigate to="/Hospedagem" />} /> {/* Ao acessar o site, Navigate já abre na pagina definida*/}
        <Route path="/hospedagem" element={<Hospedagem />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/nacionais" element={<Nacionais />} />
        <Route path="/internacionais" element={<Internacionais />} />
        <Route path="/passagens" element={<Passagens />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/ver-mais" element={<Ver />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  )
}

export default App

