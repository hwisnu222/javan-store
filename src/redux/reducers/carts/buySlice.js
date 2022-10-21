import { createSlice } from "@reduxjs/toolkit";

export const buySlice = createSlice({
  name: "buy",
  initialState: {
    total: 0,
  },
  reducers: {
    buyProduct: (state, action) => {
      state.total += action.payload;
    },
    cancelProduct: (state, action) => {
      state.total -= action.payload;
    },
  },
});

export const { buyProduct, cancelProduct } = buySlice.actions;

export default buySlice.reducer;
