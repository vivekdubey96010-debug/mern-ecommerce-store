import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="hero" />

      <div className="hero-content">
        <h1>Welcome To Tech Store</h1>
        <p>Best Electronic Products At Affordable Prices</p>

        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;