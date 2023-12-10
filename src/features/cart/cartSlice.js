import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      // action.paylaod === pizzaId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addQuantity(state, action) {
      const cookies = state.cart.find((item) => item.id === action.payload);

      cookies.quantity++;
      cookies.totalPrice = cookies.quantity * cookies.Price;
    },
    removeQuantity(state, action) {
      const cookies = state.cart.find((item) => item.id === action.payload);

      cookies.quantity--;
      cookies.totalPrice = cookies.quantity * cookies.Price;

      if (cookies.quantity === 0) cartSlice.caseReducers.removeItem(cookies.id);
    },
  },
});

export const { addItem, removeItem, addQuantity, removeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
