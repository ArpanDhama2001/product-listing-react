import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const checkedSlice = createSlice({
  name: "checked",
  initialState,
  reducers: {
    addToCheck: (state, action) => {
      const temp = { ...action.payload, checked: true, qty: 1 };
      state.value.push(temp);
    },
    removeFromCheck: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCheck, removeFromCheck } = checkedSlice.actions;

export default checkedSlice.reducer;
