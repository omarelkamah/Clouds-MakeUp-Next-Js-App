import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./slice/cartItems";
import user from "./slice/user";
import wishItems from "./slice/wishItems";

const store = configureStore({
  reducer: {
    cart: cartItems,
    wish: wishItems,
    user,
  },
});

export default store;
