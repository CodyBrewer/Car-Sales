import { combineReducers } from "redux";
import featureReducer from "../store/reducers/featureReducer";

export default combineReducers({
  features: featureReducer
});
