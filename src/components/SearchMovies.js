import React from "react";
import { useContext } from "react";
import { AppState } from "../App";
import "../styles/SearchMovieStyles/searchMovieStyles.css";

const SearchMovies = () => {
  const { search, setSearch } = useContext(AppState);
  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder="Search movie titles"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchMovies;
