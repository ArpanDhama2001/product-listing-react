import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});
