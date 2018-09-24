import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <nav className="navbar navbar-dark fixed-top">
      {/* <div className="navbar-brand" href="#">
        Clicky Game
      </div> */}
      <div>
        <h4>{props.message}</h4>
      </div>
      <div className="scores">
        <span>Score: {props.score} |</span>
        <span> Top Score: {props.topScore}</span>
      </div>
    </nav>
  </div>
);

export default Navbar;
