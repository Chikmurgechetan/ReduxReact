import { createSlice } from "@reduxjs/toolkit";

const initalState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;localStorage
