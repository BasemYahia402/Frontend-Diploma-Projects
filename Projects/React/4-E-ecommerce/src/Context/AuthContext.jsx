/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const [userId, setUserId] = useState("");

  const handleAuth = (value) => {
    setIsAuth(value);
    localStorage.setItem("isAuth", value);
  };
  const handleUserId = (value) => {
    setUserId(value);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleAuth, userId, handleUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
