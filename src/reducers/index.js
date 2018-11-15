import { combineReducers } from "redux";
import dictionary from "./dictionary";
import games from "./games";
import players from "./players";

export default combineReducers({
  dictionary,
  games,
  players
});
