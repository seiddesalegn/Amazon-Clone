// import React from "react";
// import { useShoppingCart } from "../Context/ShoppingCartContext";
// import { Link } from "react-router-dom";
// import classes from "./payment.module.css";

// function Payment() {
//   const { cartItems, getCartTotal } = useShoppingCart();

//   return (
//     <div className={classes.payment}>
//       <h2>Payment</h2>

//       {/* Delivery Address */}
//       <div className={classes.paymentSection}>
//         <h3>Delivery Address</h3>
//         <div>
//           <p>Your Name</p>
//           <p>123 Amazon Clone St.</p>
//           <p>Addis Ababa, Ethiopia</p>
//         </div>
//       </div>

//       {/* Review Items */}
//       <div className={classes.paymentSection}>
//         <h3>Review Items</h3>
//         <div>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} className={classes.cartItem}>
//                 <img src={item.image} alt={item.title} />
//                 <div>
//                   <p>{item.title}</p>
//                   <p>${item.price}</p>
//                   <p>Qty: {item.quantity}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Payment Section */}
//       <div className={classes.paymentSection}>
//         <h3>Order Summary</h3>
//         <p>Total: ${getCartTotal().toFixed(2)}</p>
//         <button disabled={cartItems.length === 0}>Place Order</button>
//         <Link to="/">← Continue Shopping</Link>
//       </div>
//     </div>
//   );
// }

// export default Payment;

import React from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { Link } from "react-router-dom";
import "./Payment.module.css"; // Create this file for styling

function Payment() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, getCartTotal } =
    useShoppingCart();

  return (
    <div className="payment-container">
      <h2>Payment</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      ) : (
        <>
          <div className="payment-items">
            {cartItems.map((item) => (
              <div key={item.id} className="payment-item">
                <img src={item.image} alt={item.title} />
                <div className="payment-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-summary">
            <h3>Total: ${getCartTotal().toFixed(2)}</h3>
            <button className="place-order-btn">Place your order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;
