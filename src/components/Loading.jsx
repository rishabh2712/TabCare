import React, { Component } from "react";

import "./Loading.css";

export default class Loading extends Component {
  static defaultProps = {
    size: 32,
    borderWidth: 4,
    fill: "currentcolor",
    spinnerClassName: "LoadingSpinner",
  };

  render() {
    let { size, borderWidth, className, spinnerClassName } = this.props;
    return (
      <div className={className}>
        <div
          className={spinnerClassName}
          style={{ width: size, height: size, borderWidth }}
        />
      </div>
    );
  }
}