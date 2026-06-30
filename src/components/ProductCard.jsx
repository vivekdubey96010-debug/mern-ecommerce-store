import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { IMAGE_URL } from "../config";

function ProductCard({ product }) {
  // 👇 Debugging ke liye
  console.log(product);

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product Added To Cart");
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success("Product Added To Wishlist");
  };

  return (
    <div className="product-card">
  <img
  src={`${IMAGE_URL}${product.image}`}
  alt={product.name}
  />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <Link to={`/product/${product._id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={handleAddToWishlist}>
        ❤️ Wishlist
      </button>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;