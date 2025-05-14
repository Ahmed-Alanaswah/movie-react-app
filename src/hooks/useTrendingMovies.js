import { use } from "react";
import { getTrendingMovies } from "../appawrite";

const useTrendingMovies = () => {
  //   const [errorTrendingMessage, setErrorTrendingMessage] = useState(null);
  //   const [trendingMovies, setTrendingMovies] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  async function loadTrendingMovies() {
    const response = await getTrendingMovies();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }

  const trendingMovies = use(loadTrendingMovies());
  //   const loadTrendingMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       const movies = await getTrendingMovies();
  //       setTrendingMovies(movies);
  //       setErrorTrendingMessage("");
  //     } catch (error) {
  //       console.error(`error fetching trending movies ${error}`);
  //       setErrorTrendingMessage(
  //         "error fetching trending movies. please try again later"
  //       );
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  // useEffect(() => {
  //   loadTrendingMovies();
  // }, []);
  return { trendingMovies };
};

export default useTrendingMovies;
