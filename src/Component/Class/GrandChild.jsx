import React, { Component } from "react";

class GrandChild extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>GrandChild</p>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default GrandChild;
