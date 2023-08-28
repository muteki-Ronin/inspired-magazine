// CORE
import { combineReducers } from "@reduxjs/toolkit";
// REDUCERS
import navigationReducer from "./features/navigationSlice.js";
import colorsReducer from "./features/colorsSlice.js";
import goodsReducer from "./features/goodsSlice.js";
import productReducer from "./features/productSlice.js";
import favoritesReducer from "./features/favoritesSlice.js";

export const rootReducer = combineReducers({
  navigationReducer,
  colorsReducer,
  goodsReducer,
  productReducer,
  favoritesReducer,
});
