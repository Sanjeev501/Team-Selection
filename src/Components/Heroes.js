import { Component } from "react";
import { removeCharactersById } from "../actions/index";
import { connect } from "react-redux";
import { GiBaseballBat } from "react-icons/gi";
import { FaBaseballBall } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

class Heroes extends Component {
  render() {
    return (
      <div>
        <h4>Playing XI</h4>
        <ul className="list-group">
          {this.props.heroes.length > 0 ? (
            this.props.heroes.map((hero) => {
              return (
                <li className="list-group-item" key={hero.id}>
                  {hero.name}
                  <span>
                    {hero.type === "Bat" ? (
                      <GiBaseballBat />
                    ) : hero.type === "All" ? (
                      <MdSportsCricket />
                    ) : (
                      <FaBaseballBall />
                    )}
                  </span>
                  <span
                    className="add"
                    onClick={() => this.props.removeHero(hero.id)}
                  >
                    x
                  </span>
                </li>
              );
            })
          ) : (
            <p>
              <i>Please start selecting the team from the Squad list</i>
            </p>
          )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeHero: (id) => dispatch(removeCharactersById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
