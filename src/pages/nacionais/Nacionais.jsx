import ouroPreto from "../../assets/nacional/ouro-preto.webp"
import fozIguaçu from "../../assets/nacional/foz-iguaçu.webp"
import fernandoNoronha from "../../assets/nacional/fernando-noronha.webp"
import gramado from "../../assets/nacional/gramado.webp"
import paraty from "../../assets/nacional/paraty.webp"

import flagBR from "../../assets/flag/icon-brasil.png"

import email from "../../assets/icons/icon-email.png"
import central from "../../assets/icons/icon-central.png"
import phone from "../../assets/icons/icon-phone.png"


import "./Nacionais.css"
import NacionaisCard from "../../components/nacionaisCard/NacionaisCard"


function Nacionais() {

  /* Dados dos pacotes */
  const nacionais = [
    {
      id: 1,
      name: "Ouro Preto - MG",
      package: "Aéreo Belo Horizonte - Ouro Preto",
      price: "R$ 478,00",
      image: ouroPreto,
      flag: flagBR
    },
    {
      id: 2,
      name: "Foz do Iguaçu - PR",
      package: "Passagem Aérea",
      price: "R$ 799,00",
      image: fozIguaçu,
      flag: flagBR
    },
    {
      id: 3,
      name: "Fernando de Noronha - PE",
      package: "Passagem Aérea Ida-Volta",
      price: "R$ 1.837",
      image: fernandoNoronha,
      flag: flagBR
    },
    {
      id: 4,
      name: "Gramado - RS",
      package: "Aéreo Porto Alegra - Gramado",
      price: "R$ 698,00",
      image: gramado,
      flag: flagBR
    },
    {
      id: 5,
      name: "Paraty - RJ",
      package: "Aéreo Rio de Janeiro - Paraty",
      price: "R$ 642,00",
      image: paraty,
      flag: flagBR
    },
  ]

  return (
    <>
      {/* Destino */}
      <section className="titulo-nacionais">
        <div className="titulos">
          <h2>Nosso cantinho chamado Brasil</h2>
          <p><span>APROVEITE</span> cupom disponivel para viagens Nacionais</p>
          <p><span>Cupom: </span>ObitaBR</p>
        </div>

      </section>

      {/* Nacionais */}
      <section className="pacotes">
        <div className="pacotes-list">

          {nacionais.map((nacional) => (
            <NacionaisCard key={nacional.id} nacional={nacional} />
          ))}
        </div>
      </section>

      {/* Informações Nacionais */}
      <section className="info-pacotes">
        <div className="info-box">
          <h3>Viagens Nacionais com as Melhores Ofertas</h3>
          <p>Explorar o Brasil é descobrir destinos incríveis, paisagens únicas e experiências inesquecíveis. Na Orbita, você encontra passagens e opções de hospedagem para viajar com praticidade e aproveitar ao máximo cada destino.
            <br/><br/>
            Compare preços, escolha as melhores datas e planeje sua viagem de forma simples e rápida.
            Seja para uma escapada de fim de semana ou férias completas, temos opções que se adaptam ao seu estilo.
            <br/><br/>
            Viaje pelo país com mais economia, conforto e segurança. Descubra novos lugares, viva novas histórias e
            aproveite tudo o que o Brasil tem a oferecer.
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

export default Nacionais