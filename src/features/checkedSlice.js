import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const checkedSlice = createSlice({
  name: "checked",
  initialState,
  reducers: {
    addToCheck: (state, action) => {
      const temp = {
        ...action.payload.product,
        checked: true,
        qty: action.payload.qty,
      };
      state.value.push(temp);
    },
    removeFromCheck: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateQty: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
      });
    },
  },
});

export const { addToCheck, removeFromCheck, updateQty } = checkedSlice.actions;

export default checkedSlice.reducer;
