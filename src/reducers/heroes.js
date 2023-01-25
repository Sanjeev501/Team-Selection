import { ADD_CHARACTERS, REMOVE_CHARACTERS } from "../actions";
import characters_json from "../data/characters.json";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTERS:
      let reHeroes = state.filter((item) => item.id !== action.id);
      return reHeroes;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find((char) => char.id === id);
  return character;
}

export default heroes;
