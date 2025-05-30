import React from "react";
import { useShoppingCart } from "../../Pages/Context/ShoppingCartContext.jsx";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat.jsx";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useShoppingCart();

  const handleDecreaseQty = (item) => {
    if (item.qty === 1) {
      removeFromCart(item.id);
    } else {
      addToCart({ ...item, qty: -1 }); // You need to support decrease logic if not added yet
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartWrapper}>
        <h2>Your Cart is Empty</h2>
        <Link to="/" className={styles.continueShopping}>
          ⬅ Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartWrapper}>
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.info}>
            <h3>{item.title}</h3>
            <p>
              <CurrencyFormat amount={item.price} />
            </p>
            <div className={styles.qtyControls}>
              <button onClick={() => handleDecreaseQty(item)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className={styles.removeBtn}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        Total: <CurrencyFormat amount={total} />
      </div>

      <Link to="/payment" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#f0c14b",
            border: "1px solid #a88734",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
};

export default Cart;
