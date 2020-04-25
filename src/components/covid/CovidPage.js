import React from "react";
import ApiCovidFetch from "./ApiCovidFetch";
import DisplayDetail from "./DisplayDetail";
import CovidLineChart from "./CovidChart";
import ToDoInstruction from "./ToDoInstruction";
import CountryButton from "./CountryButton";

const CovidPage = () => {
  return (
    <ApiCovidFetch>
      <div className="main-wrapper-content">
        <div className="container">
          <CountryButton />
          <DisplayDetail />
          <CovidLineChart />
          <ToDoInstruction />
        </div>
      </div>
    </ApiCovidFetch>
  );
};

export default CovidPage;
