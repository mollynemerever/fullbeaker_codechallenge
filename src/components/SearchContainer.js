import React, { Component } from "react";
import SearchResult from "./SearchResult.js";

export default class SearchContainer extends Component {
  render() {
    let display;
    if (this.props.searchResults !== undefined) {
      display = this.props.searchResults.map((result, index) => {
        return (
          <SearchResult
            key={index}
            tags={result.tags.split(",")}
            img={result.webformatURL}
            favorites={result.favorites}
            likes={result.likes}
            link={result.pageURL}
            id={result.id}
            saveImage={this.props.saveImage}
          />
        );
      });
    } else {
      display = "no search results";
    }
    return (
      <div>
        <p>search container to hold each result</p>
        {display}
      </div>
    );
  }
}
