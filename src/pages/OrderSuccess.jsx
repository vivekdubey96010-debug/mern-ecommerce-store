import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function OrderSuccess() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleViewOrders = () => {
    clearCart();
    navigate("/my-orders");
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p
        style={{
          marginTop: "15px",
          fontSize: "18px",
        }}
      >
        Thank you for shopping with us.
      </p>

      <button
        onClick={handleViewOrders}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          background: "#000",
          color: "#fff",
        }}
      >
        View My Orders
      </button>
    </div>
  );
}

export default OrderSuccess;