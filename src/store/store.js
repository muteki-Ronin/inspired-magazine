// CORE
import { configureStore } from "@reduxjs/toolkit";
// REDUCER
import { rootReducer } from "./rootReducer.js";

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
});
