import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../services/api";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product Added To Cart");
  };

  return (
    <div className="details">
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
      />

      <div>
        <h1>{product.name}</h1>

        <h2>₹ {product.price}</h2>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Description:</strong> {product.description}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <button onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;