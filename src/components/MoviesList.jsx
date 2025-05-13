import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const MoviesList = () => {
  const { isLoading, errorMessage, movies } = useMovies();

  return (
    <section className="all-movies">
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
  );
};

export default MoviesList;
