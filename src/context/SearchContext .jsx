import { createContext, useState, useContext, Children } from "react";

const SearchContext = createContext(null);

export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext>
  );
}
export const useSearch = () => useContext(SearchContext);
