import './styles/Hero.scss'

function Hero() {
  return (
    <div className="Hero">
      <img className="hero-image" src="/images/hero.png" alt="Hero" />
      <div className="marquee">
        <span className="marquee__content">
          <h1>Boulangerie d'ici</h1>
        </span>
        <span className="marquee__content" aria-hidden="true">
          <h1>Boulangerie d'ici</h1>
        </span>
      </div>
      <div className="hero-text">
        Pain artisanal <br/>
        Fait avec amour
      </div>
    </div>
  );
}

export default Hero;
