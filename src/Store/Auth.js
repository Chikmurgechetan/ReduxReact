import { createSlice } from "@reduxjs/toolkit";

const authInitial = { isLogine: false };

const AuthoSlice = createSlice({
  name: "autho",
  initialState: authInitial,
  reducers: {
    setLogin(state) {
      state.isLogine = true;
    },
    setLogOut(state) {
      state.isLogine = false;
    },
  },
});

export const authActions = AuthoSlice.actions;

export default AuthoSlice.reducer;