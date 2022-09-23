import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "-- Categories --",
  stock: "-- Stock --",
  searchQuery: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearFilter: (state) => {
      state.category = "-- Categories --";
      state.stock = "-- Stock --";
      state.searchQuery = "";
    },
  },
});

export const { setCategory, setStock, clearFilter, setSearchQuery } =
  filterSlice.actions;

export default filterSlice.reducer;
