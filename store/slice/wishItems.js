import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishItems: [] };

const wishItems = createSlice({
  name: "wishItems",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exist = state.wishItems.find((x) => x.id === action.payload.id);

      if (exist) {
        state.wishItems = state.wishItems.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        state.wishItems = [...state.wishItems, { ...action.payload, qty: 1 }];
      }

      console.log(state.wishItems);
    },
    removeFromWishList: (state, action) => {
      const exist = state.wishItems.find((x) => x.id === action.payload.id);

      if (exist.qty === 1) {
        state.wishItems = state.wishItems.filter(
          (x) => x.id !== action.payload.id
        );
      } else {
        state.wishItems = state.wishItems.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
        );
      }
    },
  },
});

export const { addToWishList, removeFromWishList } = wishItems.actions;
export default wishItems.reducer;
