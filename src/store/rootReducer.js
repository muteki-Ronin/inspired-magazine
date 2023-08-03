// CORE
import { combineReducers } from "@reduxjs/toolkit";
// REDUCERS
import navigationReducer from "./features/navigationSlice.js";
import colorsReducer from "./features/colorsSlice.js";

export const rootReducer = combineReducers({
  navigationReducer,
  colorsReducer,
});
