import React from "react";
import { CartContext } from "../context/CartContext";

function useCart() {
  const cart = React.useContext(CartContext);

  return cart;
}

export default useCart;
