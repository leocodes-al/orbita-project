import { NavLink } from "react-router-dom"
import { useState } from "react"

import logo from "../assets/logo-orbita-white.png"
import phone from "../assets/icons/icon-phone.png"
import help from "../assets/icons/icon-help.png"
import login from "../assets/icons/icon-login.png"

import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="Orbita" />
        </div>

        <div className="actions">

          <span>
            <img src={phone} alt="Telefone" />
            0800 3232 0820
          </span>

          <button className="action-btn">
            <img src={help} alt="Ajuda" />
            Ajuda
          </button>

          <button
            className="action-btn"
            onClick={() => window.open("/login", "_blank")}
          >
            <img src={login} alt="Login" />
            Login
          </button>

        </div>

        {/* Botão hamburguer — só aparece no mobile via CSS */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      <div className={`navBar ${menuOpen ? "open" : ""}`}>
        <nav className="nav">

          <NavLink to="/hospedagem" className={({ isActive }) => isActive ? "active" : ""}>
            Hospedagem
          </NavLink>

          <NavLink to="/passagens" className={({ isActive }) => isActive ? "active" : ""}>
            Passagens
          </NavLink>

          <NavLink to="/pacotes" className={({ isActive }) => isActive ? "active" : ""}>
            Pacotes
          </NavLink>

          <NavLink to="/ofertas" className={({ isActive }) => isActive ? "active" : ""}>
            Ofertas
          </NavLink>

          <NavLink to="/nacionais" className={({ isActive }) => isActive ? "active" : ""}>
            Nacionais
          </NavLink>

          <NavLink to="/internacionais" className={({ isActive }) => isActive ? "active" : ""}>
            Internacionais
          </NavLink>

          <NavLink to="/ver-mais" className={({ isActive }) => isActive ? "active" : ""}>
            Ver mais
          </NavLink>

        </nav>
      </div>

    </header>
  )
}

export default Header