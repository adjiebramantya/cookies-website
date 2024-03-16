import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./features/cart/cartSlice";
import menuReducer from "./features/menu/menuSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: { cart: CartReducer, menu: menuReducer, user: userReducer },
});

export default store;
