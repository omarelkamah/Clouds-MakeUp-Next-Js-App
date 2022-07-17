import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const wishItems = createSlice({
  name: "wishItems",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exist = state.items.find((x) => x.id === action.payload.id);

      if (exist) {
        state.items = state.items.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        state.items = [...state.items, { ...action.payload, qty: 1 }];
      }

      console.log(state.items);
    },
    removeFromWishList: (state, action) => {
      const exist = state.items.find((x) => x.id === action.payload.id);

      if (exist.qty === 1) {
        state.items = state.items.filter((x) => x.id !== action.payload.id);
      } else {
        state.items = state.items.map((x) =>
          x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
        );
      }
    },
  },
});

export const { addToWishList, removeFromWishList } = wishItems.actions;
export default wishItems.reducer;
