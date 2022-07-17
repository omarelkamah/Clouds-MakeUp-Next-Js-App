import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./slice/cartItems";
import wishItems from "./slice/wishItems";

const store = configureStore({
  reducer: {
    cart: cartItems,
    wish: wishItems,
  },
});

export default store;
