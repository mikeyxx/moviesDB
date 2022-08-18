import React from "react";
import { useContext } from "react";
import { AppState } from "../App";
import "../styles/favouriteMoviesStyles/favouriteMoviesStyles.css";

const Favourite = () => {
  const {
    movies: { favourites },
    removeFavourite,
  } = useContext(AppState);

  // console.log(favourites);

  return (
    <div className="favouriteContainer">
      <h1>Favourite Movies</h1>
      <div className="favouriteWrapper">
        {favourites?.map((fave) => (
          <div key={fave?.imdbID}>
            <div id="faveWrap">
              <img src={fave?.Poster} alt={fave?.Title} />
              <div id="faveDetails">
                <div id="faveMovie">
                  <button onClick={() => removeFavourite(fave.imdbID)}>
                    Remove from favourites{" "}
                    <span>
                      <i className="fa-solid fa-heart-crack"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
