import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { useShoppingCart } from "../../Pages/Context/ShoppingCartContext.jsx";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { id, image, title, rating, price } = product;
  const { addToCart } = useShoppingCart(); // add to cart yagegnal(get)

  const handleAddToCart = (e) => {
    e.preventDefault(); //Link navigate endayaderg yagezal
    addToCart(product);
  };

  return (
    <Link to={`/product/${id}`} className={styles.link}>
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
        <button onClick={handleAddToCart} className={styles.addButton}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
