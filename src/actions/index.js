export const ADD_CHARACTERS = "ADD_CHARACTERS";
export const REMOVE_CHARACTERS = "REMOVE_CHARACTERS";

export function addCharatersById(id) {
  const action = {
    type: ADD_CHARACTERS,
    id,
  };
  return action;
}

export function removeCharactersById(id) {
  const action = {
    type: REMOVE_CHARACTERS,
    id,
  };
  return action;
}
