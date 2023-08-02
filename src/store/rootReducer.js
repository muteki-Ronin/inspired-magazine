// CORE
import { combineReducers } from "@reduxjs/toolkit";
// REDUCERS
import navigationReducer from "./features/navigationSlice.js";

export const rootReducer = combineReducers({
  navigationReducer,
});
