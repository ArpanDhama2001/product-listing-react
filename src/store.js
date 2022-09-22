import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import checkedReducer from "./features/checkedSlice";
import productsReducer from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    checked: checkedReducer,
  },
});
