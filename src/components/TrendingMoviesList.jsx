import TrendingMovie from "./TrendingMovie";
import useTrendingMovies from "../hooks/useTrendingMovies";

const TrendingMoviesList = () => {
  const { errorTrendingMessage, trendingMovies, isLoading } =
    useTrendingMovies();
  return trendingMovies.length > 0 ? (
    <section className="trending">
      {isLoading ? (
        <Spinner />
      ) : errorTrendingMessage ? (
        <p className="text-red-500">{errorTrendingMessage}</p>
      ) : (
        <TrendingMovie trendingMovies={trendingMovies} />
      )}
    </section>
  ) : (
    <></>
  );
};

export default TrendingMoviesList;
