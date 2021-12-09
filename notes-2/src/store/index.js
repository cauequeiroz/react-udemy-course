import { configureStore } from "@reduxjs/toolkit";

import ui from "./ui";
import cart from "./cart";

const store = configureStore({
  reducer: {
    ui: ui.reducer,
    cart: cart.reducer
  }
});

export const uiActions = ui.actions;
export const cartActions = cart.actions;
export default store;