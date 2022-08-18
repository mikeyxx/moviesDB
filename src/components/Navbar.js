import React from "react";
import Themes from "./Themes";
import "../styles/NavbarStyles/navbarStyles.css";
import SearchMovies from "./SearchMovies";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <p id="header">Movies</p>
      <div className="navItemWrap">
        <SearchMovies />
        <Themes />
      </div>
    </div>
  );
};

export default Navbar;
