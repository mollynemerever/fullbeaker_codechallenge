import React, { Component } from "react";
import SearchForm from "./SearchForm.js";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1> this is the homepage where they will search images</h1>
        <SearchForm />
      </div>
    );
  }
}
