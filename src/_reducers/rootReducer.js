/*
 src/reducers/rootReducer.js
*/

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import posts from "./postReducer";
import user from "./userReducer";
import taxonomy from "./taxonomyReducer";

export default combineReducers({
  posts,
  user,
  taxonomy,
  formReducer,
});
