import React from "react";
import "../styles/ThemeStyles/themeStyles.css";
import { AppState } from "../App";
import { useContext } from "react";

const Themes = () => {
  const { dark, switchTheme } = useContext(AppState);
  return (
    <div className="themeBtn">
      {dark ? (
        <p onClick={switchTheme} className="desc">
          Dark
        </p>
      ) : (
        <p onClick={switchTheme} className="desc">
          Light
        </p>
      )}
      <div className="btnWrap">
        {dark ? (
          <button onClick={switchTheme} aria-label="toggle dark mode">
            😏
          </button>
        ) : (
          <button onClick={switchTheme} aria-label="toggle light mode">
            😎
          </button>
        )}
      </div>
    </div>
  );
};

export default Themes;
