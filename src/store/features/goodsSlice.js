// CORE
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// API_CONSTS
import { GOODS_URL } from "../../api/consts";

const initialState = {
  status: "idle",
  goodsList: [],
  error: null,
};

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (gender) => {
    const response = await fetch(`${GOODS_URL}?gender=${gender}`);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "received";
        state.goodsList = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
