import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const cookies = state.cart.find(
        (item) => item.cookiesId === action.payload.cookiesId
      );
      if (cookies) {
        cookies.quantity++;
        cookies.totalPrice = cookies.quantity * cookies.unitPrice;
      } else {
        state.cart.push({
          ...action.payload,
          totalPrice: action.payload.unitPrice,
        });
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.cookiesId !== action.payload
      );
    },
    addQuantity(state, action) {
      const cookies = state.cart.find(
        (item) => item.cookiesId === action.payload
      );

      cookies.quantity++;
      cookies.totalPrice = cookies.quantity * cookies.unitPrice;
    },
    removeQuantity(state, action) {
      const cookies = state.cart.find(
        (item) => item.cookiesId === action.payload
      );

      cookies.quantity--;
      cookies.totalPrice = cookies.quantity * cookies.unitPrice;

      if (cookies.quantity === 0)
        state.cart = state.cart.filter(
          (item) => item.cookiesId !== cookies.cookiesId
        );
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, addQuantity, removeQuantity, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getStockCurrentByID = (id) => (state) =>
  state.cart.cart.find((item) => item.cookiesId === id)?.quantity ?? 0;
