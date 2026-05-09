import "./InternacionaisCard.css";

function InternacionaisCard({ internacional }) {
  return (
    <div className="inter-card">

      <img
        className="inter-img"
        src={internacional.image}
        alt={internacional.name}
      />

      <div className="inter-info">
        <span className="inter-tag">INTERNACIONAL</span>

        <h3 className="inter-name">
          {internacional.name}

          <img
            className="flag"
            src={internacional.flag}
            alt="bandeira"
          />
        </h3>

        <p className="inter-package">
          {internacional.package}
        </p>

        <p className="inter-price">
          <strong>{internacional.price}</strong>
          <span> preço por pessoa</span>
        </p>
      </div>

    </div>
  );
}

export default InternacionaisCard