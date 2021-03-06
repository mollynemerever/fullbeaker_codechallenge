import React, { Component } from "react";
import SearchContainer from "./SearchContainer.js";
import { Button, Input, Dropdown } from "semantic-ui-react";

export default class SearchForm extends Component {
  state = {
    keyword: "",
    category: "",
    searchResults: undefined
  };

  componentDidMount = () => {
    if (window.localStorage.searchResults) {
      this.setState({
        searchResults: JSON.parse(window.localStorage.getItem("searchResults"))
      });
    }
  };

  handleKeywordChange = e => {
    e.preventDefault();
    this.setState({ keyword: e.target.value });
  };

  handleCategoryChange = (e, value) => {
    e.preventDefault();
    this.setState({ category: value.value });
  };

  handleSearchClick = e => {
    e.preventDefault();
    let keywords = this.state.keyword
      .toLowerCase()
      .trim()
      .replace(/\W/g, "+");
    let url = `https://pixabay.com/api/?key=${
      process.env.REACT_APP_API_KEY
    }&q=${keywords}&image_type=photo&category=${this.state.category}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ keyword: "", category: "" });
        this.setState({ searchResults: data.hits }, () => {
          window.localStorage.setItem(
            "searchResults",
            JSON.stringify(this.state.searchResults)
          );
        });
      });
  };

  clearResults = e => {
    e.preventDefault();
    this.setState({ searchResults: undefined });
    window.localStorage.removeItem("searchResults");
  };

  render() {
    let categories = [
      { text: "Animals", value: "Animals" },
      { text: "Backgrounds", value: "Backgrounds" },
      { text: "Buildings", value: "Buildings" },
      { text: "Business", value: "Business" },
      { text: "Computer", value: "Computer" },
      { text: "Education", value: "Education" },
      { text: "Fashion", value: "Fashion" },
      { text: "Feelings", value: "Feelings" },
      { text: "Food", value: "Food" },
      { text: "Health", value: "Health" },
      { text: "Industry", value: "Industry" },
      { text: "Music", value: "Music" },
      { text: "Nature", value: "Nature" },
      { text: "People", value: "People" },
      { text: "Places", value: "Places" },
      { text: "Religion", value: "Religion" },
      { text: "Science", value: "Science" },
      { text: "Sports", value: "Sports" },
      { text: "Transportation", value: "Transportation" },
      { text: "Travel", value: "Travel" }
    ];
    return (
      <div>
        <div className="search-form">
          {" "}
          <div className="search-fields">
            <Input
              maxLength="100"
              placeholder="Keywords..."
              onChange={this.handleKeywordChange}
              value={this.state.keyword}
            />{" "}
            <br />
            <br />
            <Dropdown
              onChange={this.handleCategoryChange}
              options={categories}
              placeholder="Category..."
              value={this.state.category}
              selection
            />
            <br />
            <br />
            <Button
              type="submit"
              onClick={this.handleSearchClick}
              basic
              color="blue"
            >
              {" "}
              Search{" "}
            </Button>
            <Button onClick={this.clearResults} basic color="blue">
              {" "}
              Clear Results{" "}
            </Button>
          </div>
        </div>
        <div>
          <SearchContainer
            searchResults={this.state.searchResults}
            saveImage={this.props.saveImage}
          />
        </div>
      </div>
    );
  }
}
