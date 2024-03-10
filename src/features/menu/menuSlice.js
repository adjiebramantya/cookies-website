import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: [
    {
      id: 1,
      image: "/product/kastengel.jpg",
      name: "Kastengel 400 gram",
      price: 60000,
      star: 4.8,
    },
    {
      id: 2,
      image: "/product/kastengel.jpg",
      name: "Kastengel 500 gram",
      price: 75000,
      star: 4.8,
    },
    {
      id: 3,
      image: "/product/choco-milo.jpg",
      name: "Choco Milo 400 gram",
      price: 45000,
      star: 4.9,
    },
    {
      id: 4,
      image: "/product/choco-milo.jpg",
      name: "Choco Milo 500 gram",
      price: 60000,
      star: 4.9,
    },
    {
      id: 5,
      image: "/product/nastar.jpg",
      name: "Nastar 400 gram",
      price: 65000,
      star: 4.9,
    },
    {
      id: 6,
      image: "/product/nastar.jpg",
      name: "Nastar 500 gram",
      price: 70000,
      star: 4.9,
    },
    {
      id: 7,
      image: "/product/sagu-keju.jpg",
      name: "Sagu Keju 400 gram",
      price: 45000,
      star: 4.8,
    },
    {
      id: 8,
      image: "/product/sagu-keju.jpg",
      name: "Sagu Keju 500 gram",
      price: 60000,
      star: 4.8,
    },
    {
      id: 9,
      image: "/product/putri-salju.jpg",
      name: "Putri Salju 400 gram",
      price: 50000,
      star: 4.8,
    },
    {
      id: 10,
      image: "/product/putri-salju.jpg",
      name: "Putri Salju 500 gram",
      price: 65000,
      star: 4.8,
    },
  ],
};

const menuSlice = createSlice({ name: "menu", initialState });

export default menuSlice.reducer;

export const getMenu = (state) => state.menu.menu;
