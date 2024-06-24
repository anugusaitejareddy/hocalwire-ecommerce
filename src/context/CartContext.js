import React from "react";

export const CartContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "INCREASE_QTY":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case "DECREASE_QTY":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

function CartContextProvider({ children }) {
  const [cartItems, dispatch] = React.useReducer(reducer, []);
  console.log(cartItems);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
