import { NavLink } from "react-router-dom"

import logo from "../assets/logo-orbita-white.png"
import phone from "../assets/icons/icon-phone.png"
import help from "../assets/icons/icon-help.png"
import login from "../assets/icons/icon-login.png"

import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="Orbita" />
        </div>

        <div className="actions">
          <span><img src={phone} alt="Telefone" /> 0800 3232 0820</span>
          <button>
            <img src={help} alt="Ajuda" /> Ajuda
          </button>
          <button>
            <img src={login} alt="Login" /> Login
          </button>
        </div>

      </div>

      <div className="navBar">
        <nav className="nav">

          {/* NavLink é igual o 'a' do html; isActive detecta a rota que está ativa e alterar o active */}
          <NavLink
            to="/hospedagem"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Hospedagem
          </NavLink>

          <NavLink
            to="/passagens"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Passagens
          </NavLink>

          <NavLink
            to="/pacotes"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Pacotes
          </NavLink>

          <NavLink
            to="/ofertas"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Ofertas
          </NavLink>

          <NavLink
            to="/nacionais"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Nacionais
          </NavLink>

          <NavLink
            to="/internacionais"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Internacionais
          </NavLink>

          <NavLink
            to="/ver-mais"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Ver mais
          </NavLink>

        </nav>
      </div>

    </header>
  )
}

export default Header