// CORE
import { configureStore } from "@reduxjs/toolkit";
// REDUCER
import { rootReducer } from "./rootReducer.js";
import { setStatusServer } from "./features/statusServerSlice.js";

const errorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith("/rejected")) {
    store.dispatch(setStatusServer(false));
  }

  if (action.type.endsWith("/fulfilled")) {
    store.dispatch(setStatusServer(true));
  }

  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    errorMiddleware,
  ],
});
