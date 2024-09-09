import React, { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";
import LoginPopup from "../components/LoginPopup";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const getDefaultCartItems = () => {
    let defaultCart = {};
    for (let i = 0; i < food_list.length; i++) {
      defaultCart[food_list[i].id] = 0;
    }
    return defaultCart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCartItems());

  const addToCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };

  const removeFromCart = (itemid) => {
    setCartItems((prev) => {
      if (prev[itemid] > 1) {
        return { ...prev, [itemid]: prev[itemid] - 1 };
      } else {
        return { ...prev, [itemid]: 0 };
      }
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(
          (product) => product.id.toString() === item
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
