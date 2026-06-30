import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { IMAGE_URL } from "../config";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(WishlistContext);

  return (
    <div className="cart-page">
      <h1>❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No products added.</p>
      ) : (
        wishlist.map((item) => (
          <div
            className="cart-item"
            key={item._id}
          >
            <img
            src={`${IMAGE_URL}${item.image}`}
            alt={item.name}
            />

            <div>
              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button
                onClick={() =>
                  removeFromWishlist(
                    item._id
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;