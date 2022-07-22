import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {}, signIn: false };

const user = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.signIn = true;
      localStorage.removeItem("user");
      if (localStorage.getItem("user") === null) {
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("signin", state.signIn);
      } else {
        console.log("no");
      }
    },
    signOutUser: (state, action) => {},
  },
});

export const { setUser, signOutUser } = user.actions;
export default user.reducer;
