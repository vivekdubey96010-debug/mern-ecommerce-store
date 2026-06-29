import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>TechStore</h2>
          <p>
            Premium Electronics Store with the
            latest gadgets at affordable prices.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/wishlist">Wishlist</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Mirzapur, Uttar Pradesh</p>
          <p>📞 +91 9601050666</p>
          <p>📧 vivekdubey@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TechStore | Developed by Vivek Dubey
      </div>
    </footer>
  );
}

export default Footer;