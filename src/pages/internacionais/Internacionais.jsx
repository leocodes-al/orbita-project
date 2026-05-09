import lisboa from "../../assets/internacional/lisboa.webp"
import sydney from "../../assets/internacional/sydney.webp"
import paris from "../../assets/internacional/paris.webp"
import novaYork from "../../assets/internacional/novaYork.webp"

import portugal from "../../assets/flag/icon-portugal.png"
import australia from "../../assets/flag/icon-australia.png"
import franca from "../../assets/flag/icon-franca.png"
import eua from "../../assets/flag/icon-eua.png"

import email from "../../assets/icons/icon-email.png"
import central from "../../assets/icons/icon-central.png"
import phone from "../../assets/icons/icon-phone.png"


import "./Internacionais.css"
import InternacionaisCard from "../../components/internacionaisCard/InternacionaisCard"


function Internacionais() {

  /* Dados dos pacotes */
  const internacionais = [
    {
      id: 1,
      name: "Lisboa - Portugal",
      package: "Passagem Aérea",
      price: "R$ 3.764",
      image: lisboa,
      flag: portugal
    },
    {
      id: 2,
      name: "Sydney - Austrália",
      package: "Passagem Aérea",
      price: "R$ 5.820",
      image: sydney,
      flag: australia
    },
    {
      id: 3,
      name: "Paris - França",
      package: "Passagem Aérea",
      price: "R$ 4.515",
      image: paris,
      flag: franca
    },
    {
      id: 4,
      name: "Nova York - EUA",
      package: "Passagem Aérea",
      price: "R$ 2.720",
      image: novaYork,
      flag: eua
    },
  ]

  return (
    <>
      {/* Destino */}
      <section className="titulo-internacionais">
        <div className="titulos">
          <h2>Viagens Internacionais</h2>
          <p><span>APROVEITE</span> cupom disponivel para viagens Internacionais</p>
          <p><span>Cupom: </span>ObitaPeloMundo</p>
        </div>

      </section>

      {/* Internacionais */}
      <section className="pacotes">
        <div className="pacotes-list">

          {internacionais.map((internacional) => (
            <InternacionaisCard key={internacional.id} internacional={internacional} />
          ))}
        </div>
      </section>

      {/* Informações Internacionais */}
      <section className="info-pacotes">
        <div className="info-box">
          <h3>Viagens Internacionais para Explorar o Mundo</h3>
          <p>Viajar para o exterior é viver novas culturas, conhecer lugares únicos e criar memórias inesquecíveis. Com a Orbita, você encontra passagens e hospedagens para diversos destinos ao redor do mundo, com praticidade e ótimas condições.
            <br/><br/>
            Planeje sua viagem internacional com facilidade, compare opções e escolha a melhor combinação para o seu perfil. Aqui você tem tudo o que precisa para organizar sua experiência com segurança e tranquilidade.
            <br/><br/>
            Descubra o mundo, explore novos horizontes e transforme cada viagem em uma experiência única. Com a Orbita, viajar para o exterior fica mais simples do que nunca.
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

export default Internacionais