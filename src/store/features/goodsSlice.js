// CORE
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// API_CONSTS
import { GOODS_URL } from "../../api/consts";

const initialState = {
  status: "idle",
  goodsList: [],
  error: null,
  page: 0,
  pages: 0,
  totalCount: null,
};

export const fetchGender = createAsyncThunk(
  "goods/fetchGender",
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append("gender", gender);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const fetchCategory = createAsyncThunk(
  "goods/fetchCategory",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const fetchAll = createAsyncThunk(
  "goods/fetchAll",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    url.searchParams.append("count", "all");
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = "received";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "received";
        state.goodsList = action.payload.goods;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchAll.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = "received";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { setPage } = goodsSlice.actions;

export default goodsSlice.reducer;
