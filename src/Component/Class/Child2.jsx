import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Child2 Component </h3>
        <GrandChild data={this.props.stock} />
      </div>
    );
  }
}

export default Child2;
