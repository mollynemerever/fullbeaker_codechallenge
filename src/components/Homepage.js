import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import SavedImagesContainer from "./SavedImagesContainer.js";

export default class Homepage extends Component {
  state = { savedImages: [] };

  saveImage = (e, image) => {
    e.preventDefault();
    console.log("inside save Image");
    this.setState({ savedImages: [...this.state.savedImages, image] });
  };

  render() {
    return (
      <div>
        <h1> this is the homepage where they will search images</h1>
        <SearchForm saveImage={this.saveImage} />
        <SavedImagesContainer savedImages={this.state.savedImages} />
      </div>
    );
  }
}
