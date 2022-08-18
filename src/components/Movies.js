import React from "react";
import { AppState } from "../App";
import { useContext } from "react";
import "../styles/MoviesStyles/MoviesStyles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const {
    movies: { moviesItem, favourites },
    fetchFavouriteMovies,
    removeFavourite,
  } = useContext(AppState);

  //   console.log(moviesItem);

  return (
    <>
      <Slider {...settings}>
        {moviesItem?.map((movie) => (
          <div key={movie?.imdbID}>
            <div className="movieWrap">
              <img src={movie?.Poster} alt={movie?.Title} />
              <div id="details">
                <div id="fave">
                  {favourites?.some(
                    (fave) => fave?.imdbID === movie?.imdbID
                  ) ? (
                    <button onClick={() => removeFavourite(movie?.imdbID)}>
                      Added to favourites{" "}
                      <span>
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </button>
                  ) : (
                    <button onClick={() => fetchFavouriteMovies(movie?.imdbID)}>
                      Add to favourites{" "}
                      <span>
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Movies;
