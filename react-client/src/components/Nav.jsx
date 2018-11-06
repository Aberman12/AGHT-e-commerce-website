import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <div>
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle coolapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/About">About</Link>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/Africa">Gemstones</Link>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/Central-America">Fossils</Link>
                </li>
                <li className="col-lg-2 col-md-2 col-sm-2">
                  <Link to="/Europe">Garden</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Nav;
