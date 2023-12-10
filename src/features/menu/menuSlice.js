import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      image: "test",
      name: "Kastengel",
      price: 20000,
      star: 4.7,
    },
  ],
};

const menuSlice = createSlice({ name: "menu", initialState });

export default menuSlice.reducer;

export const getMenu = (state) => state.menu.menu;
