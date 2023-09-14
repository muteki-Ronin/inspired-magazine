// CORE
import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: true };

const statusServerSlice = createSlice({
  name: "statusServer",
  initialState,
  reducers: {
    setStatusServer(state, action) {
      state.status = action.payload;
    },
  },
});

export const {setStatusServer} = statusServerSlice.actions;
export default statusServerSlice.reducer;