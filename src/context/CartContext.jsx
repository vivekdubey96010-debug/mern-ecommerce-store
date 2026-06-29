import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const cartKey = user ? `cart_${user.id}` : "cart_guest";

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(cartKey);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item._id === product._id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (_id) => {
    setCart(
      cart.map((item) =>
        item._id === _id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (_id) => {
    setCart(
      cart
        .map((item) =>
          item._id === _id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (_id) => {
    setCart(
      cart.filter((item) => item._id !== _id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;