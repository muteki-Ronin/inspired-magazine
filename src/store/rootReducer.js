// CORE
import { combineReducers } from "@reduxjs/toolkit";
// REDUCERS
import navigationReducer from "./features/navigationSlice.js";
import colorsReducer from "./features/colorsSlice.js";
import goodsReducer from "./features/goodsSlice.js";
import productReducer from "./features/productSlice.js";
import favoritesReducer from "./features/favoritesSlice.js";
import cartReducer from "./features/cartSlice.js";
import searchReducer from "./features/searchSlice.js";
import statusServerReducer from "./features/statusServerSlice.js";

export const rootReducer = combineReducers({
  navigationReducer,
  colorsReducer,
  goodsReducer,
  productReducer,
  favoritesReducer,
  cartReducer,
  searchReducer,
  statusServerReducer,
});
