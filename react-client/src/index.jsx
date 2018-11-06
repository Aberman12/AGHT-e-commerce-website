import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
// import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./file.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // $.ajax({
    //   url: "/items",
    //   success: data => {
    //     this.setState({
    //       items: data
    //     });
    //   },
    //   error: err => {
    //     console.log("err", err);
    //   }
    // });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
