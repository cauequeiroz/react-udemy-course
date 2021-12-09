import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: 'ui',
  initialState: {
    isCartVisible: false
  },
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    }
  }
});

export default ui;