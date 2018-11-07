import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    $(window).scroll(function() {
      $(".nav li").each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 0) {
          console.log("something happend");
          $(".nav li").removeClass("col-lg-2 col-md-2 col-sm-2");
          $("ul").css("margin-left", "6.2%");
          $(".nav li").addClass("li-animation");
          $("ul").addClass("ul-animation");
        }
        if (imagePos > topOfWindow + 0) {
          console.log("something happend");
          $(".nav li").removeClass("li-animation");
          $(".nav li").addClass("col-lg-2 col-md-2 col-sm-2");
          $(".navbar-nav").css("margin-left", "5%");
        }
      });
    });
  }

  render() {
    return (
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
  }
}

export default Nav;
