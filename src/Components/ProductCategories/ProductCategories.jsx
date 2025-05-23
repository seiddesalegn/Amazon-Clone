import React from "react";
import styles from "./ProductCategories.module.css";
import { categories } from "../../data/data";

const ProductCategories = () => {
  return (
    <div className={styles.container}>
      {categories.map((cat, index) => (
        <div key={index} className={styles.card}>
          <img src={cat.image} alt={cat.title} />
          <h3>{cat.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
