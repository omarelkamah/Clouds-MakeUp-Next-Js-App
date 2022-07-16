import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./slice/cartItems";

const store = configureStore({
  reducer: {
    cart: cartItems,
  },
});

export default store;
