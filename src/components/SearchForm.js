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
    let keywords = this.state.keyword.replace(/\W/g, "+");
    let url = `https://pixabay.com/api/?key=${
      process.env.REACT_APP_API_KEY
    }&q=${keywords}&image_type=photo&category=${this.state.category}`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
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
      { text: "Fashion", value: "Fashion" },
      { text: "Nature", value: "Nature" },
      { text: "Backgrounds", value: "Backgrounds" },
      { text: "Science", value: "Science" },
      { text: "Education", value: "Education" },
      { text: "People", value: "People" },
      { text: "Feelings", value: "Feelings" },
      { text: "Religion", value: "Religion" },
      { text: "Health", value: "Health" },
      { text: "Places", value: "Places" },
      { text: "Animals", value: "Animals" },
      { text: "Industry", value: "Industry" },
      { text: "Food", value: "Food" },
      { text: "Computer", value: "Computer" },
      { text: "Sports", value: "Sports" },
      { text: "Transportation", value: "Transportation" },
      { text: "Travel", value: "Travel" },
      { text: "Buildings", value: "Buildings" },
      { text: "Business", value: "Business" },
      { text: "Music", value: "Music" }
    ];
    return (
      <div>
        <div className="search-form">
          {" "}
          <Input
            focus
            basic
            maxLength="100"
            placeholder="Keywords..."
            onChange={this.handleKeywordChange}
            value={this.state.keyword}
          />{" "}
          <Dropdown
            onChange={this.handleCategoryChange}
            options={categories}
            placeholder="Category..."
            value={this.state.category}
          />
          <br />
          <Button
            type="submit"
            onClick={this.handleSearchClick}
            basic
            color="red"
          >
            {" "}
            Search{" "}
          </Button>
          <Button onClick={this.clearResults} basic color="red">
            {" "}
            Clear Results{" "}
          </Button>
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
