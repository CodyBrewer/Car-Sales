import { combineReducers } from "redux";
import carReducer from "../store/reducers/carReducer";

export default combineReducers({
  car: carReducer
});
