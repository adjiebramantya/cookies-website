import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      id: 1,
      image: "/product/kastengel.jpg",
      name: "Kastengel",
      price: 50000,
      star: 4.8,
    },
    {
      id: 2,
      image: "/product/choco-milo.jpg",
      name: "Choco Milo",
      price: 40000,
      star: 4.9,
    },
    {
      id: 3,
      image: "/product/nastar.jpg",
      name: "Nastar",
      price: 45000,
      star: 4.9,
    },
    {
      id: 4,
      image: "/product/sagu-keju.jpg",
      name: "Sagu Keju",
      price: 47500,
      star: 4.8,
    },
    {
      id: 5,
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
