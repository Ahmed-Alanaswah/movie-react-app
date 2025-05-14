import "./App.css";
import MoviesList from "./components/MoviesList";
import TrendingMoviesList from "./components/TrendingMoviesList";
import Header from "./components/Header";
import { ErrorFallback, ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main>
        <div className="pattern">
          <div className="wrapper">
            <Header />
            <TrendingMoviesList />
            <MoviesList />
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
}

export default App;
