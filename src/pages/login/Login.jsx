import logoLogin from "../../assets/logo-icon.png"
import gmail from "../../assets/logoGoogle.png"


import "./Login.css"

function Login() {
  return (

    <main className="login">
      <div className="container-login">

        <div className="logo-titulo">
          <img src={logoLogin} alt="logo orbita" />
          <h3>Faça login ou crie uma conta</h3>
        </div>

        <div className="acesso">
          <label>E-mail</label>
          <input type="text" placeholder="Insira seu e-mail"/>
          <button>Continuar com E-mail</button>
        </div>

        <div className="opcoes-acesso">
          <label>ou use uma das seguintes opções</label>
          <button>
            <img src={gmail} alt="gmail google" />
          </button>
          <p>Perdeu o acesso a conta? <span>AJUDA</span></p>
        </div>

      </div>
    </main>
  )
}

export default Login