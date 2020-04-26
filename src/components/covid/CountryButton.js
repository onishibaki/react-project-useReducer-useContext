import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const CountryButton = () => {
  const dataContext = useContext(DataContext);
  const { jpCountry, phCountry, activeClass } = dataContext;
  const activeMenu = "active-menu";
  return (
    <div className="country-button-wraper">
      <ul>
        <li>
          <button
            className={`${activeClass === true ? activeMenu : ""}`}
            onClick={() => jpCountry()}
          >
            Japan
          </button>
        </li>
        <li>
          <button
            className={`${activeClass === false ? activeMenu : ""}`}
            onClick={() => phCountry()}
          >
            Philippines
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CountryButton;
