import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

function Header() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav>
          <div className={styles.logo}>
            <Link to="/">Store</Link>
          </div>
          <div>
            <Link to="cart" className={styles.cartItems}>
              Cart ({cartItems.length})
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
