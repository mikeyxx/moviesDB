import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import "./styles/AppStyles/appStyles.css";
import { useCallback } from "react";
import Favourite from "./components/Favourite";

export const AppState = createContext();

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")));
  const [movies, setMovies] = useState({
    moviesItem: [],
    favourites: JSON.parse(localStorage.getItem("faves")),
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const switchTheme = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(movies.favourites));
  }, [movies.favourites]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=3642af0a`
      );
      if (!response.ok) throw Error("This movie is not available");
      const data = await response.json();
      setMovies((prev) => ({ ...prev, moviesItem: data.Search }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const fetchFavouriteMovies = useCallback(
    (imdbID) => {
      movies.moviesItem.map((movie) =>
        movie.imdbID === imdbID
          ? setMovies((prev) => ({
              ...prev,
              favourites: [...prev.favourites, movie],
            }))
          : ""
      );
    },
    [movies.moviesItem]
  );

  const removeFavourite = (imdbID) => {
    setMovies((prev) => ({
      ...prev,
      favourites: prev.favourites.filter((fave) => fave.imdbID !== imdbID),
    }));
  };

  return (
    <AppState.Provider
      value={{
        dark,
        switchTheme,
        movies,
        fetchFavouriteMovies,
        removeFavourite,
        search,
        setSearch,
      }}
    >
      <div className={`App ${dark ? "Dark" : ""}`}>
        <Navbar />
        {loading ? (
          <p id="loading">Loading...</p>
        ) : (
          <>
            <Movies />
            <Favourite />
          </>
        )}
      </div>
    </AppState.Provider>
  );
}

export default App;
