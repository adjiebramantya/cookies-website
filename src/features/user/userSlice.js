import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  date: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.name = action.payload.name;
      state.date = action.payload.date;
    },
    emptyUser(state) {
      state.name = "";
      state.date = "";
    },
  },
});

export const { updateUser, emptyUser } = userSlice.actions;

export default userSlice.reducer;
