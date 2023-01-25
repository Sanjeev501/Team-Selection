import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import Characters from "./Characters";
import Heroes from "./Heroes";
import TeamXI from "./TeamXI";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Team Selection</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <Characters />
          </div>
          <div className="col-md-4">
            <Heroes />
          </div>
          <div className="col-md-4">
            <TeamXI />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
