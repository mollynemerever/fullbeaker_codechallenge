import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import SavedImagesContainer from "./SavedImagesContainer.js";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Homepage extends Component {
  state = { savedImages: [] };

  componentDidMount = () => {
    if (window.localStorage.savedImages) {
      this.setState({
        savedImages: JSON.parse(window.localStorage.getItem("savedImages"))
      });
    }
  };

  saveImage = (e, image) => {
    e.preventDefault();
    this.setState({ savedImages: [...this.state.savedImages, image] }, () => {
      window.localStorage.setItem(
        "savedImages",
        JSON.stringify(this.state.savedImages)
      );
    });
  };

  clearLocalStorage = () => {
    window.localStorage.clear();
  };

  render() {
    return (
      <div className="search-page">
        <Button
          as={Link}
          to="/welcome"
          onClick={this.clearLocalStorage}
          basic
          color="red"
        >
          {" "}
          Exit{" "}
        </Button>

        <div className="columns">
          <SearchForm saveImage={this.saveImage} />
          <SavedImagesContainer savedImages={this.state.savedImages} />
        </div>
      </div>
    );
  }
}
