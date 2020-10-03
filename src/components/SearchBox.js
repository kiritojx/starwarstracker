import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <input
        className="pa2 mb3"
        type="Search"
        placeholder="Search character"
        onChange={this.props.searchChange}
      />
    );
  }
}
