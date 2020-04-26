import React, { useContext } from "react";
import {
  IconSpinner,
  IconPositive,
  IconRecovery,
  IconDeath,
} from "../Icon/IconList";
import LatestDetail from "./LatestDetail";
import DataContext from "../context/DataContext";

const posStyle = {
  marginRight: "12px",
  color: "#FF8C00",
};
const deStyle = {
  marginRight: "12px",
  color: "#B22222",
};
const recStyle = {
  marginRight: "12px",
  color: "#006400",
};

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
    <div className="content-details-wraper">
      <h1>COVID-19 in {country}</h1>
      <h5>Last updated: {covid_date}</h5>
      <ul>
        <li>
          <h3>
            <IconPositive propStyle={posStyle} />
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
        <li>
          <h3>
            <IconDeath propStyle={deStyle} />
            Deaths
          </h3>
          {loading ? (
            <IconSpinner />
          ) : (
            <LatestDetail totalData={TotalDeath} singleData={covid_death} />
          )}
        </li>
        <li>
          <h3>
            <IconRecovery propStyle={recStyle} />
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
