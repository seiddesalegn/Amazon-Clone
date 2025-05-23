import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <strong>${product.price}</strong>
    </div>
  );
};

export default ProductCard;
