import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {}, signIn: false };

const user = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.signIn = true;
      //   console.log(state.user);
    },
    signOutUser: (state, action) => {},
  },
});

export const { setUser, signOutUser } = user.actions;
export default user.reducer;
