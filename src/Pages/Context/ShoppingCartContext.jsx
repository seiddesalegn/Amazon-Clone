import React, { createContext, useContext, useReducer } from "react";

const ShoppingCartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    default:
      return state;
  }
}

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: id });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: id });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
