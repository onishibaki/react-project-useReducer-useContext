import React from "react";

const LatestDetail = ({ totalData, singleData }) => {
  return (
    <p>
      {totalData}
      <span>( +{singleData} )</span>
    </p>
  );
};

export default LatestDetail;
