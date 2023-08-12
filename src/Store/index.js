import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counter";
import AuthReducer from "./Auth";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

export default store;
