import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  const activeStyle = {
    color: "orange",
  };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
