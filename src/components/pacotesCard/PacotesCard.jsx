import "./PacotesCard.css";

function PacotesCard({ pacote }) {
  return (
    <div className="cidade-card">

      <img
        className="cidade-img"
        src={pacote.image}
        alt={pacote.name}
      />

      <div className="cidade-info">
        <span className="cidade-tag">PACOTES</span>

        <h3 className="cidade-name">
          {pacote.name}

          <img
            className="flag"
            src={pacote.flag}
            alt="bandeira"
          />
        </h3>

        <p className="cidade-package">
          {pacote.package}
        </p>

        <p className="pacote-price">
          <strong>{pacote.price}</strong>
          <span> preço por pessoa</span>
        </p>
      </div>

    </div>
  );
}

export default PacotesCard