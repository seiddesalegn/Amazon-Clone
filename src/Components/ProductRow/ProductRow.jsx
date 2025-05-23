// ProductRow.js
import React, { useEffect, useState } from "react";
import styles from "./ProductRow.module.css"; // create this CSS module
import ProductCard from "../ProductCard/ProductCard"; // you'll need to build this too

const ProductRow = ({ title, fetchUrl }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    getProducts();
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rowContent}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
