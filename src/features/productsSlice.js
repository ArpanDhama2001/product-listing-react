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
    toggleCheck: (state, action) => {
      state.data.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.checked = !ele.checked;
        }
      });
    },
    updateQty: (state, action) => {
      state.data.forEach((item) => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
      });
    },
    compareToCart: (state, action) => {
      state.data.forEach((ele) => {
        let present = false;
        action.payload.forEach((cart) => {
          if (ele.id === cart.id) {
            present = true;
            ele.qty = cart.qty;
          }
        });
        if (!present) {
          ele.qty = 1;
          ele.checked = false;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.loading;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        let temp = [];
        state.data.forEach((ele) => {
          ele = {
            ...ele,
            checked: false,
            qty: 1,
          };
          temp.push(ele);
        });
        state.data = temp;
        state.status = STATUS.idle;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.error;
      });
  },
});

export const { setProducts, setStatus, toggleCheck, updateQty, compareToCart } =
  productsSlice.actions;
export default productsSlice.reducer;

// THUNKS

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(getAllProducts());
  const data = await res.json();
  return data.products;
});
