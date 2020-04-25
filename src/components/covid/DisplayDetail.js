import React, { useContext } from "react";
import {
  IconSpinner,
  IconPositive,
  IconRecovery,
  IconDeath,
} from "../Icon/IconList";
import LatestDetail from "./LatestDetail";
import covidStyle from "../../styles/content/covidStyle";
import DataContext from "../context/DataContext";

const DisplayDetail = () => {
  const dataContext = useContext(DataContext);
  const {
    covidDetails: { TotalPositive, TotalDeath, TotalRecovered, Latest },
    loading,
  } = dataContext;

  const latestDate = Latest[Latest.length - 1];

  const {
    covid_positive,
    covid_death,
    covid_recovered,
    country,
    covid_date,
  } = latestDate;

  return (
    <div>
      <h1 style={covidStyle.h1Style}>COVID-19 in {country}</h1>
      <h5 style={covidStyle.h5Style}>Last updated: {covid_date}</h5>
      <ul>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconPositive />
            Cases
          </h3>
          {loading ? (
            <IconSpinner />
          ) : (
            <LatestDetail
              totalData={TotalPositive}
              singleData={covid_positive}
            />
          )}
        </li>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconDeath />
            Deaths
          </h3>
          {loading ? (
            <IconSpinner />
          ) : (
            <LatestDetail totalData={TotalDeath} singleData={covid_death} />
          )}
        </li>
        <li style={covidStyle.dataDetailStyle}>
          <h3 style={covidStyle.h3Style}>
            <IconRecovery />
            Recoveries
          </h3>
          {loading ? (
            <IconSpinner />
          ) : (
            <LatestDetail
              totalData={TotalRecovered}
              singleData={covid_recovered}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default DisplayDetail;
