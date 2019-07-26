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
      <div>
        <h1>Welcome to ImgSearcher</h1>
        <h4>You never know what you might find </h4>
        <Button onClick={this.handleClick}> Get Searchin'</Button>
      </div>
    );
  }
}
