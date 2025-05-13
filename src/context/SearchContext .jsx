import { createContext, useState, useContext, Children } from "react";

const SearchContext = createContext(null);

export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
export const useSearch = () => useContext(SearchContext);
