import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Homepage from "./components/Homepage.js";

export default class App extends Component {
  // componentDidMount = () => {
  //   ;
  // };
  render() {
    return (
      <Router>
        <Redirect to="/welcome" />
        <Route exact path="/welcome" component={() => <Welcome />} />
        <Route exact path="/search" component={() => <Homepage />} />
      </Router>
    );
  }
}
