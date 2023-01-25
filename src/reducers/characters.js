import { ADD_CHARACTERS, REMOVE_CHARACTERS } from "../actions";
import characters_json from "../data/characters.json";

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTERS:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTERS:
      let reCharacters = [...state, createCharacter(action.id)];
      return reCharacters;
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find((char) => char.id === id);
  return character;
}

export default characters;
