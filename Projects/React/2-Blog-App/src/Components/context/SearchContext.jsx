import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <SearchContext.Provider value={{ searchValue, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
