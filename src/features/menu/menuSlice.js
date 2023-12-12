import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      image: "/product/kastengel.jpg",
      name: "Kastengel",
      price: 50000,
      star: 4.8,
    },
    {
      image: "/product/choco-milo.jpg",
      name: "Choco Milo",
      price: 40000,
      star: 4.9,
    },
    {
      image: "/product/nastar.jpg",
      name: "Nastar",
      price: 45000,
      star: 4.9,
    },
    {
      image: "/product/sagu-keju.jpg",
      name: "Sagu Keju",
      price: 47500,
      star: 4.8,
    },
    {
      image: "/product/putri-salju.jpg",
      name: "Putri Salju",
      price: 45000,
      star: 4.8,
    },
  ],
};

const menuSlice = createSlice({ name: "menu", initialState });

export default menuSlice.reducer;

export const getMenu = (state) => state.menu.menu;

export const getCartById = (state) => {};
