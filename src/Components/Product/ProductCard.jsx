import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { image, title, rating, price } = product;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <div className={styles.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>({rating.count})</small>
        </div>
        <div className={styles.price}>
          <CurrencyFormat amount={price} />
        </div>
      </div>
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
