import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />

      <section className="features">
        <div className="feature-box">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick shipping across India.</p>
        </div>

        <div className="feature-box">
          <h3>💳 Secure Payment</h3>
          <p>100% secure transactions.</p>
        </div>

        <div className="feature-box">
          <h3>⭐ Premium Quality</h3>
          <p>Top-rated products only.</p>
        </div>
      </section>

      <FeaturedProducts />

      <section className="newsletter">
        <h2>Subscribe For Latest Offers</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <button>Subscribe</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;