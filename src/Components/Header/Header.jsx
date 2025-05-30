import React from "react";
import styles from "./Header.module.css";
import {
  FaBars,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaCaretDown,
} from "react-icons/fa"; //i used react icons insted of fontawesome
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../Pages/Context/ShoppingCartContext.jsx";

export default function Header() {
  const { cartItems } = useShoppingCart();

  // Calculate total quantity in cart
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className={styles.headerWrapper}>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.left}>
          <div className={styles.hoverBox}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className={styles.logo}
            />
          </div>

          <div className={`${styles.delivery} ${styles.hoverBox}`}>
            <FaMapMarkerAlt className={styles.locationIcon} />
            <div className={styles.locationText}>
              <span className={styles.topText}>Deliver to</span>
              <span className={styles.bottomText}>Seattle 98125</span>
            </div>
          </div>
        </div>

        <div className={styles.searchBar}>
          <select className={styles.select}>
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
          </select>
          <input
            className={styles.searchInput}
            placeholder="Search Amazon"
            onFocus={(e) => e.target.classList.add(styles.focused)}
            onBlur={(e) => e.target.classList.remove(styles.focused)}
          />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>

        <div className={styles.right}>
          <div className={`${styles.lang} ${styles.hoverBox}`}>
            <span>EN</span>
            <img
              src="https://flagcdn.com/us.svg"
              alt="US"
              className={styles.flag}
            />
          </div>
          <div className={`${styles.account} ${styles.hoverBox}`}>
            <span className={styles.smallText}>Hello, sign in</span>
            <span className={styles.boldText}>
              Account & Lists <FaCaretDown />
            </span>
          </div>
          <div className={`${styles.orders} ${styles.hoverBox}`}>
            <span className={styles.smallText}>Returns</span>
            <span className={styles.boldText}>& Orders</span>
          </div>
          <Link to="/cart" className={`${styles.cart} ${styles.hoverBox}`}>
            <FaShoppingCart />
            <span className={styles.cartCount}>{totalQty}</span>
          </Link>
        </div>
      </div>

      {/* Bottom Header */}
      <div className={styles.bottomHeader}>
        <div className={styles.bottomLeft}>
          <FaBars className={styles.menuIcon} />
          <span className={styles.allText}>All</span>
        </div>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.rufus}>
            Rufus
          </a>
          <a href="#" className={styles.joinPrime}>
            Join Prime
          </a>
          <a href="#">Amazon Haul</a>
          <a href="#">Same-Day Delivery</a>
          <a href="#">Medical Care</a>
          <a href="#">Saks</a>
          <a href="#">Keep Shopping For</a>
          <a href="#">Buy Again</a>
          <a href="#">Kindle Books</a>
          <a href="#">Shop By Interest</a>
          <a href="#">Pharmacy</a>
          <a href="#">Books</a>
        </nav>
      </div>
    </div>
  );
}
