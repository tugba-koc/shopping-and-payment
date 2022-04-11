import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "money",
  initialState: {
    amount: 0,
    cart: [],
    ids : []
  },
  reducers: {
    addToCart: (state, action) => {
      state.amount += Number(action.payload.amount);
      state.cart.push({ id:action.payload.id, name: action.payload.name, amount: action.payload.amount });
      state.ids.push(action.payload.id);
    },
    removeFromCart: (state, action) => {
      state.amount -= Number(action.payload.amount);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.ids = state.ids.filter((item) => item !== action.payload.id);
    }
  },
});

export const selectAmount = (state) => state.amount.amount;
export const selectCart = (state) => state.amount.cart;

export const { addToCart, removeFromCart } = amountSlice.actions;
export default amountSlice.reducer;
