import "./PacotesCard.css";

function PacotesCard({ pacote }) {
  return (
    <div className="pacote-card">

      <img
        className="pacote-img"
        src={pacote.image}
        alt={pacote.name}
      />

      <div className="pacote-info">
        <span className="pacote-tag">PACOTES</span>

        <h3 className="pacote-name">
          {pacote.name}

          <img
            className="flag"
            src={pacote.flag}
            alt="bandeira"
          />
        </h3>

        <p className="pacote-package">
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