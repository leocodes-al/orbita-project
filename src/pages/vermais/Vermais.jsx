import "./Vermais.css"
import manutencao from "../../assets/icon-manutencao.png"


function Ver() {

  return (
    <>
      {/* Passagens */}
      <section className="vermais">
        <div className="container-vermais">
          <h2>Pagina em Manutenção...</h2>
          <img src={manutencao} alt="manutenção" />
        </div>
      </section>
    </>
  );
}

export default Ver