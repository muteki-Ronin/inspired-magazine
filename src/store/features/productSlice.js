// CORE
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// API_CONSTS
import { GOODS_URL } from "../../api/consts";

const initialState = {
  status: "idle",
  error: null,
  product: {},
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await fetch(`${GOODS_URL}/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "received";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
