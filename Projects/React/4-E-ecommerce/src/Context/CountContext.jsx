/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [wishCount, setWishCount] = useState(
    localStorage.getItem("wishCount") || 0
  );
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );

  const handleWish = (value) => {
    setWishCount(value);
    localStorage.setItem("wishCount", value);
  };
  const handleCart = (value) => {
    setCartCount(value);
    localStorage.setItem("cartCount", value);
  };
  return (
    <CountContext.Provider
      value={{ wishCount, handleWish, cartCount, handleCart }}
    >
      {children}
    </CountContext.Provider>
  );
};
