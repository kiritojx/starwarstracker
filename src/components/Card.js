import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="bg-near-white dib br3 pa4 ma2 grow bw2 shadow-5 tc">
        <img
          src={this.props.image}
          alt={"star war avatar"}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="black">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}
