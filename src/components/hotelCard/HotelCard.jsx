import "./HotelCard.css";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
 
      <img
        className="hotel-img"
        src={hotel.image}
        alt={hotel.name}
      />

      <div className="hotel-info">
        <span className="hotel-tag">HOSPEDAGENS</span>

        <h3 className="hotel-name">
          {hotel.name}

          <img
            className="flag"
            src={hotel.flag}
            alt="bandeira"
          />
        </h3>

        <p className="hotel-location">
          {hotel.location}
        </p>

        <p className="hotel-price">
          <strong>{hotel.price}</strong> <span>+ taxa</span>
        </p>
      </div>

    </div>
  );
}

export default HotelCard