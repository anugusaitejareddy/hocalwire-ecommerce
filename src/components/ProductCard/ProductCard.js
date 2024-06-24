import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

function ProductCard({ title, price, description, image, rating, id }) {
  const { cartItems, dispatch } = useCart();

  function handleAddToCart() {
    let isUpdate = false;

    cartItems.forEach((item) => {
      if (item.id === id) {
        isUpdate = true;
      }
    });

    if (isUpdate) {
      dispatch({
        type: "INCREASE_QTY",
        id,
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: { title, price, image, id, quantity: 1 },
      });
    }
  }

  return (
    <div className={styles.productCardWrapper}>
      <Link to={id.toString()} className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={description}
            className={styles.productCardImage}
          />
        </div>
        <div className={styles.detailsWrapper}>
          <p className={styles.productTitle}>{title}</p>
          <p>₹ {Math.ceil(price * 80)}</p>
        </div>
        <div className={styles.rating}>
          <p>{rating.rate}⭐</p>
          <p>|</p>
          <p>{rating.count}</p>
        </div>
      </Link>
      <div className={styles.addToCart} onClick={handleAddToCart}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
