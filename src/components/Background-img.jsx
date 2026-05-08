import bg from "../assets/background-hero.webp"
import "./Background-img.css"

function BackgroundImage() {

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
    </>
  );
}

export default BackgroundImage