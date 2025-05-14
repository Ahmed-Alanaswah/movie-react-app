import TrendingMovie from "./TrendingMovie";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { Suspense } from "react";
import Spinner from "./Spinner";

const TrendingMoviesList = () => {
  const { trendingMovies } = useTrendingMovies();

  return (
    <Suspense fallback={<Spinner />}>
      <TrendingMovie trendingMovies={trendingMovies} />
    </Suspense>
  );
  //   return trendingMovies.length > 0 ? (
  //     <section className="trending">
  //       {isLoading ? (
  //         <Spinner />
  //       ) : errorTrendingMessage ? (
  //         <p className="text-red-500">{errorTrendingMessage}</p>
  //       ) : (
  //         <TrendingMovie trendingMovies={trendingMovies} />
  //       )}
  //     </section>
  //   ) : (
  //     <></>
  //   );
};

export default TrendingMoviesList;
