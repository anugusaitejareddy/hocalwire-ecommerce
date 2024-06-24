import React from "react";
import style from "./CartItem.module.css";
import useCart from "../../hooks/useCart";

function CartItem({ image, title, price, description, quantity, id }) {
  const { dispatch } = useCart();

  function handleIncreaseQty() {
    dispatch({
      type: "INCREASE_QTY",
      id,
    });
  }

  function handleReduceQty() {
    if (quantity === 1) {
      dispatch({
        type: "REMOVE_ITEM",
        id,
      });
    }

    dispatch({
      type: "DECREASE_QTY",
      id,
    });
  }

  function handleDeleteItem() {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.cartImageWrapper}>
          <img src={image} alt={description} className={style.cartItemImage} />
        </div>
        <div className={style.detailsWrapper}>
          <div className={style.title}>{title}</div>
          <p>₹ {Math.ceil(price * 80)}</p>
          <div className={style.quantityWrapper}>
            Qty:
            <div className={style.quantity}>
              <button onClick={handleReduceQty}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseQty}>+</button>
            </div>
          </div>
        </div>
        <div className={style.removeItem}>
          <span class="material-symbols-outlined" onClick={handleDeleteItem}>
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
