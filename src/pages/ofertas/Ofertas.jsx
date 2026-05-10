import "./Ofertas.css"
import manutencao from "../../assets/icon-manutencao.png"


function Ofertas() {

  return (
    <>
      {/* Ofertas */}
      <section className="Ofertas">
        <div className="container-Ofertas">
          <h2>Pagina em Manutenção...</h2>
          <img src={manutencao} alt="manutenção" />
        </div>
      </section>
    </>
  );
}

export default Ofertas