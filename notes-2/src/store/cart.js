import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    quantity: 0
  },
  reducers: {
    addProduct(state, { payload }) {
      state.quantity += 1;

      const item = state.items.find(product => product.id === payload.id);

      if (!item) {
        state.items.push({
          id: payload.id,
          title: payload.title,
          price: payload.price,
          totalPrice: payload.price,
          quantity: 1
        });
      } else {
        item.totalPrice += payload.price;
        item.quantity += 1;
      }
    },

    removeProduct(state, { payload }) {
      state.quantity -= 1;

      const id = payload;
      const item = state.items.find(product => product.id === id);

      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
      } else {
        state.items = state.items.filter(product => product.id !== id);
      }
    }
  }
});

export default cart;