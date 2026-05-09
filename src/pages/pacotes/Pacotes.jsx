import maceio from "../../assets/pacote/maceio.webp"
import rio from "../../assets/pacote/rio.webp"
import paris from "../../assets/pacote/paris.webp"
import londres from "../../assets/pacote/londres.webp"
import cancun from "../../assets/pacote/cancun.jpg"

import flagBR from "../../assets/flag/icon-brasil.png"
import flagFranca from "../../assets/flag/icon-franca.png"
import flagIngla from "../../assets/flag/icon-inglaterra.png"
import flagMex from "../../assets/flag/icon-mexico.png"


import email from "../../assets/icons/icon-email.png"
import central from "../../assets/icons/icon-central.png"
import phone from "../../assets/icons/icon-phone.png"


import "./Pacotes.css"
import PacotesCard from "../../components/pacotesCard/PacotesCard"


function Pacotes() {

  /* Dados dos pacotes */
  const pacotes = [
    {
      id: 1,
      name: "Maceió - Brasil",
      package: "Hotel + Aéreo",
      price: "R$ 1.586",
      image: maceio,
      flag: flagBR
    },
    {
      id: 2,
      name: "Rio de Janeiro",
      package: "Hotel + Aéreo",
      price: "R$ 2.088",
      image: rio,
      flag: flagBR
    },
    {
      id: 3,
      name: "Paris - França",
      package: "Hotel + Aéreo",
      price: "R$ 4.290",
      image: paris,
      flag: flagFranca
    },
    {
      id: 4,
      name: "Londres - Inglaterra",
      package: "Hotel + Aéreo",
      price: "R$ 4.980",
      image: londres,
      flag: flagIngla
    },
    {
      id: 5,
      name: "Cancún - México",
      package: "Hotel + Aéreo",
      price: "R$ 3.090",
      image: cancun,
      flag: flagMex
    },
  ]

  return (
    <>
      {/* Destino */}
      <section className="titulo-pacotes">
        <div className="titulos">
          <h2>Os melhores pacotes de viagens pelo mundo!</h2>
          <p>Viagens <span>nacionais</span> e <span>internacionais</span></p>
          <p>Hotel + Aéreo em até <span>6x</span></p>
        </div>

      </section>

      {/* Pacotes */}
      <section className="pacotes">
        <div className="pacotes-list">

          {pacotes.map((pacote) => (
            <PacotesCard key={pacote.id} pacote={pacote} />
          ))}
        </div>
      </section>

      {/* Informações Pacotes */}
      <section className="info-pacotes">
        <div className="info-box">
          <h3>Pacotes de Viagem com Voo + Hotel</h3>
          <p>Planejar sua viagem nunca foi tão simples. Com os pacotes da Orbita, você encontra tudo o que precisa em um só lugar:
            passagens aéreas e hospedagem organizadas para oferecer praticidade, economia e conforto.
            Aproveite ofertas exclusivas e embarque com tudo pronto, sem preocupações.<br/><br/>

            Ao escolher um pacote completo, você garante melhores condições e ainda pode adicionar serviços extras,
            como aluguel de carros, passeios e seguros. Tudo para que sua experiência seja completa do início ao fim.<br/><br/>

            Descubra novas possibilidades, personalize sua viagem do seu jeito e aproveite cada momento com mais tranquilidade.
            Com a Orbita, seu próximo destino está mais perto do que você imagina.
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

export default Pacotes