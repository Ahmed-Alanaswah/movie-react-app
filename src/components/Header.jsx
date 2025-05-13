import React from "react";
import { useSearch } from "../context/SearchContext ";
import Search from "./Search";

const Header = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <header>
      <img src="./hero.png" alt="hero banner" />
      <h1>
        Find <span className="text-gradient">Movie</span> You Will Enjoy Without
        The Hassle
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
