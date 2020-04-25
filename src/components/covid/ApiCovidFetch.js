import React, { useState, useEffect, useReducer } from "react";
import { IconSpinner } from "../Icon/IconList";
import DataContext from "../context/DataContext";
import CountryReducer from "../reducer/CountryReducer";

const ApiCovidFetch = (props) => {
  const [covid, setCovid] = useState({});
  const initialState = {
    country: "Japan",
    activeClass: true,
  };
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const [loading, setLoading] = useState(false);
  const url = `https://covid-api-v1-2.herokuapp.com/covidUpdate/api/v1?country=${state.country}`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    const fetchCovid = () => {
      setLoading(true);
      fetch(url, options)
        .then((result) => result.json())
        .then((data) => {
          setCovid(data.covid) || setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    fetchCovid();
  }, [url]);

  const jpCountry = () => {
    dispatch({ type: "jpCountry" });
  };

  const phCountry = () => {
    dispatch({ type: "phCountry" });
  };

  const spinStyle = {
    display: "block",
    textAlign: "center",
    fontSize: "100px",
    marginTop: "60px",
  };

  return Object.keys(covid).length === 0 ? (
    <IconSpinner propStyle={spinStyle} />
  ) : (
    <DataContext.Provider
      value={{
        covidDetails: covid,
        loading,
        jpCountry,
        phCountry,
        activeClass: state.activeClass,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ApiCovidFetch;
