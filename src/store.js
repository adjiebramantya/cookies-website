import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menu/menuSlice";

const store = configureStore({
  reducer: { cart: CartReducer, menu: menuReducer },
});

export default store;
