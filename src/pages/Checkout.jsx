import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/orders", {
        user: JSON.parse(localStorage.getItem("user"))?.id,
        items: cart,
        totalPrice,
        shippingAddress: formData,
        paymentMethod: "Cash On Delivery",
      });

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.log(error);
      alert("Order Failed");
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
      />

      <h2>Total: ₹ {totalPrice}</h2>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;