import characters from "./characters";
import heroes from "./heroes";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
