import logo from "../assets/logo-orbita-white.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-mensagem">
          <p>
            Seu próximo destino começa aqui. Descubra ofertas e planeje experiências inesquecíveis.
          </p>
        </div>

        <div className="footer-conteudo">
          <div className="logo-footer">
            <img src={logo} alt="Orbita" />
          </div>

          <div className="navegacoes">
            <div className="navegacoes-link">
              <h4>NAVEGAÇÕES</h4>
              <a href="#">Hospedagem</a>
              <a href="#">Passagens</a>
              <a href="#">Pacotes</a>
              <a href="#">Ofertas</a>
              <a href="#">Nacionais</a>
              <a href="#">Internacionais</a>
            </div>

            <div className="navegacoes-ajuda">
              <h4>AJUDA</h4>
              <a href="#">Central de Atendimento</a>
              <a href="#">Dúvidas Frequentes</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>

            <div className="navegacoes-sociais">
              <h4>REDES SOCIAIS</h4>
              <a href="#">Instagram</a>
              <a href="#">Telegram</a>
              <a href="#">Facebook</a>
            </div>

          </div>
        </div>

        <p className="footer-copy">
          © 2026 Orbita. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;