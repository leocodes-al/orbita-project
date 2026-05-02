import hotelMaceio from "../../assets/hotel/hotel-maceio.webp"
import hotelLondres from "../../assets/hotel/hotel-londres.jpg"
import hotelParis from "../../assets/hotel/hotel-paris.jpg"
import hotelRio from "../../assets/hotel/hotel-rj.jpg"
import hotelCancun from "../../assets/hotel/hotel-cancun.jpg"

import flagBR from "../../assets/flag/icon-brasil.png"
import flagAustralia from "../../assets/flag/icon-australia.png"
import flagEua from "../../assets/flag/icon-eua.png"
import flagFranca from "../../assets/flag/icon-franca.png"
import flagIngla from "../../assets/flag/icon-inglaterra.png"
import flagItalia from "../../assets/flag/icon-italia.png"
import flagMex from "../../assets/flag/icon-mexico.png"
import flagPort from "../../assets/flag/icon-portugal.png"


import "./Hospedagem.css"
import bg from "../../assets/background-hero.jpg"
import HotelCard from "../../components/hotelCard/HotelCard"




function Hospedagem() {

  /* Dados dos hotéis */
  const hotels = [
    {
      id: 1,
      name: "Maceió Resort Hotel",
      location: "A 200m da praia",
      price: "R$ 740,00",
      image: hotelMaceio,
      flag: flagBR
    },
    {
      id: 2,
      name: "St. Ermin's Hotel",
      location: "A 1,2 KM do Big Bang",
      price: "R$ 1.098,00 + taxa",
      image: hotelLondres,
      flag: flagIngla
    },
    {
      id: 3,
      name: "Hotel Dulouyre",
      location: "Vista inigualável da Torre Eiffel",
      price: "R$ 1.286,00 + taxa",
      image: hotelParis,
      flag: flagFranca
    },
    {
      id: 4,
      name: "Copacabana Palace",
      location: "A 300m da Praia",
      price: "R$ 1.158,00 + taxa",
      image: hotelRio,
      flag: flagBR
    },
    {
      id: 5,
      name: "Oasis Cancun Lite",
      location: "Resort completo | A 100m da praia",
      price: "R$ 1.066,00 + taxa",
      image: hotelCancun,
      flag: flagMex
    },
  ]

  return (
    <>
      {/* Img Background */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content">
          <h1>Seu próximo destino começa aqui</h1>
        </div>
      </section>

      {/* Destino */}
      <section className="search">
        <div className="search-box">
          <input type="text" placeholder="Destino" />
          <input type="date" />
          <input type="date" />
          <button>Buscar</button>
        </div>

      </section>

      {/* Hospedagens */}
      <section className="hospedagens">
        <div className="hotel-list">

          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}

        </div>
      </section>
    </>
  );
}

export default Hospedagem