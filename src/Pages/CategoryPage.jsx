// import React from "react";
// import { useParams, Link } from "react-router-dom";

// function CategoryPage() {
//   const { categoryName } = useParams();

//   return (
//     <div style={{ padding: "1rem" }}>
//       <Link to="/" style={{ textDecoration: "none", color: "#007185" }}>
//         ← Back to Home
//       </Link>
//       <h2 style={{ marginTop: "1rem", textTransform: "capitalize" }}>
//         {categoryName} Products
//       </h2>
//       <p>Here you can display products for the "{categoryName}" category.</p>
//       {/* You can add product filtering here later */}
//     </div>
//   );
// }

// export default CategoryPage;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <div>Loading products...</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#007185" }}>
        ← Back to Home
      </Link>
      <h2 style={{ marginTop: "1rem", textTransform: "capitalize" }}>
        {categoryName} Products
      </h2>
      {products.length === 0 && <p>No products found in this category.</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "0.5rem",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxWidth: "100%",
                height: "150px",
                objectFit: "contain",
              }}
            />
            <h4 style={{ fontSize: "1rem" }}>{product.title}</h4>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} style={{ color: "#007185" }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
