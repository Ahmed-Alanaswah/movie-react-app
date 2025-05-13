import { useState, useEffect } from "react";
import { getTrendingMovies } from "../appawrite";

const useTrendingMovies = () => {
  const [errorTrendingMessage, setErrorTrendingMessage] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
      setErrorTrendingMessage("");
    } catch (error) {
      console.error(`error fetching trending movies ${error}`);
      setErrorTrendingMessage(
        "error fetching trending movies. please try again later"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);
  return { errorTrendingMessage, trendingMovies, isLoading };
};

export default useTrendingMovies;
