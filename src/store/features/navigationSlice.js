// CORE
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// CONSTS
import { CATEGORIES_URL } from "../../api/consts";

const initialState = {
  activeGender: "woman",
  status: "idle",
  categories: {},
  genderList: [],
  error: null,
};

export const fetchNavigation = createAsyncThunk(
  "navigation/fetchNavigation",
  async () => {
    const response = await fetch(CATEGORIES_URL);
    const data = await response.json();
    return data;
  }
);

const navigationSlice = createSlice({
  name: "navigation",
  initialState,

  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigation.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNavigation.fulfilled, (state, action) => {
        state.status = "received";
        state.categories = action.payload;
        state.genderList = Object.keys(action.payload);
      })
      .addCase(fetchNavigation.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { setActiveGender } = navigationSlice.actions;

export default navigationSlice.reducer;
