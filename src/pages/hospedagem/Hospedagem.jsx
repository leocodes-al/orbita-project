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

import email from "../../assets/icons/icon-email.png"
import central from "../../assets/icons/icon-central.png"
import phone from "../../assets/icons/icon-phone.png"


import "./Hospedagem.css"
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

      {/* Informações hospedagem */}
      <section className="info-hospedagem">
        <div className="info-box">
          <h3>Hospedagens</h3>
          <p>Encontrar o lugar ideal para se hospedar é uma das partes mais importantes da sua viagem. Na Orbita, você descobre opções de hotéis selecionados para diferentes estilos de viagem, desde estadias econômicas até experiências mais completas e confortáveis.<br></br><br></br>
            Cada hospedagem foi pensada para oferecer praticidade e bem-estar, seja para uma viagem de descanso, lazer ou negócios. Explore diferentes destinos, escolha o hotel ideal e aproveite sua estadia com mais tranquilidade e segurança.<br></br><br></br>
            Com a Orbita, você encontra o equilíbrio perfeito entre conforto, localização e custo-benefício para sua próxima viagem.
          </p>
        </div>
      </section>

      {/* Central de Ajuda */}
      <section className="central-ajuda">
        <div className="central-box">

          <div className="central-titulo">
            <img src={central} alt="central de ajuda" />
            <span>CENTRAL DE AJUDA</span>
          </div>

          <div className="central-contato">
            <div className="contato-item">
              <img src={phone} alt="telefone" />
              <span>0800 3232 0820</span>
            </div>

            <div className="contato-item">
              <img src={email} alt="email" />
              <span>orbita@yahoo.com.br</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hospedagem