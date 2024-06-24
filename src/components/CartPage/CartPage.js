import React from "react";
import useCart from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import style from "./CartPage.module.css";

function CartPage() {
  const { cartItems } = useCart();
  return (
    <div>
      <div className={style.wrapper}>
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
