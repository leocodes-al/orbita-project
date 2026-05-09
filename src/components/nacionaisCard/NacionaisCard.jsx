import "./NacionaisCard.css";

function NacionaisCard({ nacional }) {
  return (
    <div className="nacional-card">

      <img
        className="nacional-img"
        src={nacional.image}
        alt={nacional.name}
      />

      <div className="nacional-info">
        <span className="nacional-tag">NACIONAL</span>

        <h3 className="nacional-name">
          {nacional.name}

          <img
            className="flag"
            src={nacional.flag}
            alt="bandeira"
          />
        </h3>

        <p className="nacional-package">
          {nacional.package}
        </p>

        <p className="nacional-price">
          <strong>{nacional.price}</strong>
          <span> preço por pessoa</span>
        </p>
      </div>

    </div>
  );
}

export default NacionaisCard