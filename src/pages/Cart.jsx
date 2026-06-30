import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IMAGE_URL } from "../config";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <h2>🛒 Your Cart Is Empty</h2>
        </div>
      ) : (
        <>
          {cart.map((item) => (
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

                <div>
                  <button
                    onClick={() =>
                      decreaseQuantity(item._id)
                    }
                  >
                    -
                  </button>

                  <span
                    style={{
                      margin: "0 10px",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item._id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹ {total}</h2>

          <Link to="/checkout">
            <button>
              Proceed To Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;