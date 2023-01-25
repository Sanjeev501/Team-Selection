import { Component } from "react";
import { connect } from "react-redux";
import { addCharatersById } from "../actions";
import { GiBaseballBat } from "react-icons/gi";
import { FaBaseballBall } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";

class SquadList extends Component {
  render() {
    return (
      <div>
        <h4>Squad List</h4>
        <ul className="list-group">
          {this.props.characters.map((character) => {
            return (
              <li className="list-group-item" key={character.id}>
                {character.name}
                <span>
                  {character.type === "Bat" ? (
                    <GiBaseballBat />
                  ) : character.type === "All" ? (
                    <MdSportsCricket />
                  ) : (
                    <FaBaseballBall />
                  )}
                </span>
                <span
                  className="add"
                  onClick={() => this.props.heroes(character.id)}
                >
                  +
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    heroes: (id) => dispatch(addCharatersById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadList);
