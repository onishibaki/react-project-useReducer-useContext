import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyleLink = { borderBottom: "2px solid #5F9EA0" };
  return (
    <header className="main-header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeStyle={activeStyleLink} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/covid" activeStyle={activeStyleLink}>
                Covid Tracker
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
