/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);
export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchItem = (Value) => {
    setSearchValue(Value);
  };
  return (
    <SearchContext.Provider value={{ searchValue, handleSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};

