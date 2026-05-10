import "./Passagens.css"
import manutencao from "../../assets/icon-manutencao.png"


function Passagens() {

  return (
    <>
      {/* Passagens */}
      <section className="passagens">
        <div className="container-passagens">
          <h2>Pagina em Manutenção...</h2>
          <img src={manutencao} alt="manutenção" />
        </div>
      </section>
    </>
  );
}

export default Passagens