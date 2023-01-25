import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import SquadList from "./SquadList";
import PlayingXI from "./PlayingXI";
import TeamStats from "./TeamStats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Team Selection</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <SquadList />
          </div>
          <div className="col-md-4">
            <PlayingXI />
          </div>
          <div className="col-md-4">
            <TeamStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
