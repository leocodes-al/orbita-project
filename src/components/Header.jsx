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
          <a href="hospedagem.html" className="active">Hospedagem</a>
          <a href="passagens.html">Passagens</a>
          <a href="pacotes.html">Pacotes</a>
          <a href="ofertas.html">Ofertas</a>
          <a href="nacionais.html">Nacionais</a>
          <a href="internacionais.html">Internacionais</a>
          <a href="ver-mais.html">Ver mais</a>
        </nav>
      </div>

    </header>
  );
}

export default Header