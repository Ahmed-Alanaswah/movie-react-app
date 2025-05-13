import "./App.css";
import MoviesList from "./components/MoviesList";
import TrendingMoviesList from "./components/TrendingMoviesList";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <Header />
          <TrendingMoviesList />
          <MoviesList />
        </div>
      </div>
    </main>
  );
}

export default App;
