import { combineReducers } from "redux";
import GetprofileReducer from "./GetprofileReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  getprofile: GetprofileReducer,
});
