import { useState, useEffect } from "react";
import { updateSearchCount } from "../appawrite";
import { useDebounce } from "react-use";
import { useSearch } from "../context/SearchContext ";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const { searchTerm } = useSearch();

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  useDebounce(() => setDebounceSearchTerm(searchTerm), 2000, [searchTerm]);

  const fetcMovies = async (query) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const end_point = query
        ? `${API_BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
            query
          )}`
        : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(end_point, options);

      if (!response.ok) {
        throw new Error("faild to fetch movies");
      }
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setErrorMessage(data.Error || "faild to fetch movies");
        setMovies([]);
        return;
      }
      setMovies(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`error fetching movies ${error}`);
      setErrorMessage("error fetching movies. please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetcMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);
  return { movies, errorMessage, isLoading };
};

export default useMovies;
