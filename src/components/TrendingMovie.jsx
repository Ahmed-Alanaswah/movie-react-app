import React from "react";

const TrendingMovie = ({ trendingMovies }) => {
  return (
    <>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie, index) => (
          <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.poster_url} alt={movie.title} loading="lazy" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMovie;
