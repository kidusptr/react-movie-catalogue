import Search from "./components/search";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  // Main application component
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
        setMovieList([]);
      }
      const data = await response.json();
      console.log(data);
      setMovieList(data.results);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy
            without the hustle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="movie-list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <div key={movie.id} className="movie-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h2>{movie.title}</h2>
                </div>
              ))}
            </ul>
          )}
        </section>
      </div>
      <h1 className="text-white text-3xl">{searchTerm}</h1>
    </main>
  );
};

export default App;
