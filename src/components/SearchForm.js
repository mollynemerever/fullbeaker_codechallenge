import React, { Component } from "react";
import { Button, Input, Dropdown } from "semantic-ui-react";

export default class SearchForm extends Component {
  state = {
    keyword: undefined,
    category: undefined
  };

  handleKeywordChange = e => {
    e.preventDefault();
    this.setState({ keyword: e.target.value });
    console.log(e.target.value);
  };

  handleCategoryChange = (e, value) => {
    e.preventDefault();
    this.setState({ category: value.value });
    console.log(value.value);
  };

  handleClick = e => {
    e.preventDefault();
    alert(`${this.state.keyword}, ${this.state.category}`);
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
        {" "}
        <Input
          focus
          placeholder="Keywords..."
          onChange={this.handleKeywordChange}
        />{" "}
        <br />
        <Dropdown
          onChange={this.handleCategoryChange}
          options={categories}
          placeholder="Category..."
        />
        <br />
        <Button onClick={this.handleClick}> Search </Button>
      </div>
    );
  }
}
