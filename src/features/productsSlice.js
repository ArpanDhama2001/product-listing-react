import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../config/apiConfig";

export const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const initialState = {
  data: [],
  status: STATUS.idle,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.idle;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.error;
      });
  },
});

export const { setProducts, setStatus, setNewProps } = productsSlice.actions;
export default productsSlice.reducer;

// THUNKS

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(getAllProducts());
  const data = await res.json();
  return data.products;
});
