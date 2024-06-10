import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useCountContext } from "../Context/CountContext.jsx";
import { useCallback } from "react";

export const useFetechData = () => {
  const [Products, setProducts] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState("");
  const { handleCart, handleWish } = useCountContext();

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data() });
      });

      setProducts(newData);
      localStorage.setItem("products", JSON.stringify(newData));
    } catch (error) {
      setError(error);
    }
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) {
      setProducts(data);
    } else {
      fetchDataFromFirestore();
    }
  };

  const updateRating = (productId, userName, text, star) => {
    const existingProductIndex = Products.findIndex(
      (product) => product.id === productId
    );
    if (existingProductIndex !== -1) {
      const existingProduct = Products[existingProductIndex];
      const newProduct = {
        ...existingProduct,
        rate: [...existingProduct.rate, { userName, text, star }],
      };

      const updatedProducts = [...Products];
      updatedProducts[existingProductIndex] = newProduct;

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }
  };

  const updateWishlistData = (productId, isWish) => {
    const updatedProducts = Products.map((product) =>
      product.id === productId ? { ...product, isWish } : product
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const updateCartData = (productId, isAdd, quantity = 0) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              isCart: isAdd,
              quantity: isAdd ? quantity : product.quantity,
            }
          : product
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const getWishlistData = useCallback(
    (data) => {
      const filteredData = data.filter((product) => product.isWish === true);
      handleWish(filteredData.length);
      return filteredData;
    },
    [handleWish]
  );

  const getCartData = useCallback(
    (data) => {
      const filteredData = data.filter((product) => product.isCart === true);
      handleCart(filteredData.length);
      return filteredData;
    },
    [handleCart]
  );

  useEffect(() => {
    if (localStorage.getItem("products")) {
      fetchDataFromLocalStorage();
    } else {
      fetchDataFromFirestore();
    }
  }, []);

  useEffect(() => {
    setWishlistData(getWishlistData(Products));
    setCartData(getCartData(Products));
  }, [Products]);

  return {
    Products,
    error,
    wishlistData,
    cartData,
    updateWishlistData,
    updateCartData,
    updateRating,
  };
};
