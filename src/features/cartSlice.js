import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [];
      action.payload.forEach((ele) => {
        if (ele.checked) state.value.push(ele);
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    changeQty: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.value.filter((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increment") {
            item.qty++;
          } else if (action.payload.type === "decrement" && item.qty > 1) {
            --item.qty;
          }
        }
      });
    },
  },
});

export const { addToCart, remove, changeQty } = cartSlice.actions;

export default cartSlice.reducer;
