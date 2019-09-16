import React, { Component } from "react";
import loader from "../images/gif/loading-arrow.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h2>Please Wait...</h2>
        <img src={loader} alt=""/>
      </div>
    );
  }
}