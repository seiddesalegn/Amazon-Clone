import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.middle}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <strong className={styles.price}>${product.price.toFixed(2)}</strong>
        </div>

        <div className={styles.right}>
          <div className={styles.addToCartBox}>
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className={styles.qtySelect}
            >
              {[...Array(10).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <button className={styles.addButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
