import { use } from "react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const MoviesList = () => {
  const { fetcMovies } = useMovies();
  const data = use(fetcMovies());
  const movies = data.results;
  //   return (
  // <section className="all-movies">
  //   {isLoading ? (
  //     <Spinner />
  //   ) : errorMessage ? (
  //     <p className="text-red-500">{errorMessage}</p>
  //   ) : (
  //     <ul>
  //       {movies.map((movie) => (
  //         <MovieCard movie={movie} key={movie.id} />
  //       ))}
  //     </ul>
  //   )}
  // </section>
  //   );
  return (
    <Suspense fallback={<Spinner />}>
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </Suspense>
  );
};

export default MoviesList;
