import React, { Component } from "react";

export default class SavedImage extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link} rel="noopener noreferrer" target="_blank">
          {this.props.id}{" "}
        </a>
      </div>
    );
  }
}
