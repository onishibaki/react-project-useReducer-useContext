import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconSpinner = ({ propStyle }) => (
  <span style={propStyle}>
    <FontAwesomeIcon icon="spinner" spin />
  </span>
);
const IconPositive = ({ propStyle }) => (
  <span style={propStyle}>
    <FontAwesomeIcon icon="sad-tear" />
  </span>
);
const IconRecovery = ({ propStyle }) => (
  <span style={propStyle}>
    <FontAwesomeIcon icon="grin-alt" />
  </span>
);
const IconDeath = ({ propStyle }) => (
  <span style={propStyle}>
    <FontAwesomeIcon icon="dizzy" />
  </span>
);

export { IconSpinner, IconPositive, IconRecovery, IconDeath };
