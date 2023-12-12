import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      image: "/product/kastengel.jpg",
      name: "Kastengel",
      price: 20000,
      star: 4.7,
    },
    {
      image: "/product/choco-milo.jpg",
      name: "Choco Milo",
      price: 20000,
      star: 4.7,
    },
    {
      image: "/product/nastar.jpg",
      name: "Nastar",
      price: 20000,
      star: 4.7,
    },
    {
      image: "/product/sagu-keju.jpg",
      name: "Sagu Keju",
      price: 20000,
      star: 4.7,
    },
  ],
};

const menuSlice = createSlice({ name: "menu", initialState });

export default menuSlice.reducer;

export const getMenu = (state) => state.menu.menu;

export const getCartById = (state) => {};
