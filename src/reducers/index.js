import { combineReducers } from "redux";
import jugadoresReducer from "./jugadoresReducer";

export default combineReducers({
  jugadores: jugadoresReducer,
});
