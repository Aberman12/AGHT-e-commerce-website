import React from "react";
import { Link } from "react-router-dom";

const Home = props => (
  <div>
    {" "}
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
    <div className="banner">
      <div className="banner-layer">
        <h3 data-aos="fade-up">Exqusite</h3>
      </div>
    </div>
    {/* --------Marketing starts Here----------- */}
    <div className="container marketing">
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/169928/pexels-photo-169928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* ------- Divider ------ */}
    <hr className="feature-divider" />
    {/* ---------- last part ---------- */}
    <div className="row feature">
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
    <hr className="feature-divider" />
    <div className="row feature">
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/297648/pexels-photo-297648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
    </div>
    <hr className="feature-divider" />
    <div className="row feature">
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/154243/pexels-photo-154243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Home;
