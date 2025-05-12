import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 2000, [searchTerm]);

  const fetcMovies = async (query) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      //
      const end_point = query
        ? `${API_BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
            query
          )}`
        : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(end_point, options);
      // fetch(`include_adult=false&language=en-US&page=1`, options)

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

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero banner" />
            <h1>
              Find <span className="text-gradient">Movie</span> You Will Enjoy
              Without The Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
