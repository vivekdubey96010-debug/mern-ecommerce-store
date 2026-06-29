import { useState, useEffect } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : product.category === category;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <input
        type="text"
        placeholder="Search Products..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filter-buttons">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Laptop")}>
          Laptop
        </button>

        <button onClick={() => setCategory("Mobile")}>
          Mobile
        </button>

        <button
          onClick={() =>
            setCategory("Accessories")
          }
        >
          Accessories
        </button>

        <button onClick={() => setCategory("Camera")}>
          Camera
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Products;