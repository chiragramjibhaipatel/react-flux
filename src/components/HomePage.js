import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administrator</h1>
      <p>React, redux and React router web site</p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
