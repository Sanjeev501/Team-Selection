import { Component } from "react";
import { connect } from "react-redux";

class TeamStats extends Component {
  bat = () => {
    let bat = 0;
    this.props.heroes.forEach((item) => {
      bat += item.type === "Bat" ? 1 : 0;
    });
    return bat;
  };

  all = () => {
    let all = 0;
    this.props.heroes.forEach((item) => {
      all += item.type === "All" ? 1 : 0;
    });
    return all;
  };

  bowl = () => {
    let bowl = 0;
    this.props.heroes.forEach((item) => {
      bowl += item.type === "Bowl" ? 1 : 0;
    });
    return bowl;
  };

  render() {
    return (
      <div>
        <h4>Team Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">Batsmen: {this.bat()}</li>
          <li className="list-group-item">All Rounders: {this.all()} </li>
          <li className="list-group-item">Bowlers: {this.bowl()}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
  };
};

export default connect(mapStateToProps, null)(TeamStats);
