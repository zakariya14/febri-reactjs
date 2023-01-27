import { Alert } from "reactstrap";
import React, { Component } from "react";

class BootstrapComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Alert color="info">This is a primary alert — check it out!</Alert>
      </div>
    );
  }
}

export default BootstrapComp;
