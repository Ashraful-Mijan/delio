import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  subtotal: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart.some((el) => el._id === action.payload._id)
        ? state.cart
        : [...state.cart, action.payload];
      state.subtotal = state.cart.reduce(
        (acc, current) => acc + current.price,
        0
      );
      state.total =
        state.cart.reduce((acc, current) => acc + current.price, 0) + 100;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );
      state.subtotal = state.cart.reduce(
        (acc, current) => acc + current.price,
        0
      );
      state.total =
        state.cart.reduce((acc, current) => acc + current.price, 0) + 100;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
