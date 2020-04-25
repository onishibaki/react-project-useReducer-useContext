import React, { useContext } from "react";
import covidStyle from "../../styles/content/covidStyle";
import DataContext from "../context/DataContext";

const CountryButton = () => {
  const dataContext = useContext(DataContext);
  const { jpCountry, phCountry, activeClass } = dataContext;
  const activeMenu = "active-menu";
  return (
    <div style={covidStyle.divStyle}>
      <ul style={covidStyle.bListUlStyle}>
        <li style={covidStyle.bListliStyle}>
          <button
            className={`${activeClass === true ? activeMenu : ""}`}
            style={covidStyle.buttonStyle}
            onClick={() => jpCountry()}
          >
            Japan
          </button>
        </li>
        <li style={covidStyle.bListliStyle}>
          <button
            className={`${activeClass === false ? activeMenu : ""}`}
            style={covidStyle.buttonStyle}
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
