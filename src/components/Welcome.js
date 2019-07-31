import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class Welcome extends Component {
  state = { enterSite: false };

  handleClick = () => {
    this.setState({ enterSite: true });
  };
  render() {
    if (this.state.enterSite === true) {
      return <Redirect to="/search" />;
    }
    return (
      <div className="welcome-parent">
        <div className="welcome">
          <h1>Welcome to Image Searcher</h1>
          <h4>You Never Know What You Might Find </h4>
          <Button onClick={this.handleClick} basic color="blue">
            {" "}
            Get Searchin'
          </Button>
        </div>
      </div>
    );
  }
}
