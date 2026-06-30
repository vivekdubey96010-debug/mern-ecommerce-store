import { useEffect, useState } from "react";
import API from "../services/api";
import { IMAGE_URL } from "../config";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(
          localStorage.getItem("user")
        );

        const res = await API.get(
          `/orders?user=${user.id}`
        );

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="cart-page">
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="cart-item"
            style={{ marginBottom: "30px" }}
          >
            <div>
              <h3>Total : ₹ {order.totalPrice}</h3>

              <p>
                Payment :
                {" "}{order.paymentMethod}
              </p>

              <p>
                Date :
                {" "}
                {new Date(
                  order.createdAt
                ).toLocaleDateString()}
              </p>

              <h4>Products</h4>

              {order.items.map((item) => (
                <div
                  key={item._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                  src={`${IMAGE_URL}${item.image}`}
                  alt={item.name}
                  width="70"
                  style={{ marginRight: "15px" }}
                  />

                  <div>
                    <p>{item.name}</p>

                    <p>
                      Qty : {item.quantity}
                    </p>

                    <p>
                      ₹ {item.price}
                    </p>
                  </div>
                </div>
              ))}

              <hr />

              <h4>Shipping Address</h4>

              <p>
                {order.shippingAddress.fullName}
              </p>

              <p>
                {order.shippingAddress.phone}
              </p>

              <p>
                {order.shippingAddress.address}
              </p>

              <p>
                {order.shippingAddress.city}
              </p>

              <p>
                {order.shippingAddress.pincode}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;