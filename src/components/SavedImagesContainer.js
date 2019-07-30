import React, { Component } from "react";
import SavedImage from "./SavedImage.js";

export default class SavedImagesContainer extends Component {
  render() {
    let saved;
    if (this.props.savedImages.length === 0) {
      saved = "No Saved Images";
    } else {
      saved = this.props.savedImages.map((image, index) => {
        return <SavedImage key={index} id={image.id} link={image.link} />;
      });
    }

    return (
      <div className="saved-images">
        {" "}
        <h4> Saved Images </h4>
        {saved}
      </div>
    );
  }
}
