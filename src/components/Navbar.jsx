import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>TechStore</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/wishlist">
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/my-orders">
          My Orders
        </Link>

        {user ? (
          <>
            <span
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginLeft: "15px",
              }}
            >
              👤 {user.name}
            </span>

            <button
              onClick={toggleTheme}
              style={{
                marginLeft: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={handleLogout}
              style={{
                marginLeft: "10px",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleTheme}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                background: "#fff",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;