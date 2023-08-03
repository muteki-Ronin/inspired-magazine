// CORE
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// API_CONSTS
import { COLORS_URL } from "../../api/consts";

const initialState = {
  status: "idle",
  colorsList: [],
  error: null,
};

export const fetchColors = createAsyncThunk("colors/fetchColors", async () => {
  const response = await fetch(COLORS_URL);
  const data = await response.json();
  return data;
});

const colorsSlice = createSlice({
  name: "colors",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = "received";
        state.colorsList = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default colorsSlice.reducer;
