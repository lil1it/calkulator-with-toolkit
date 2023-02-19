import { combineReducers, createStore } from "redux";

import {  authSlice } from "./auth/AuthSlice";
import {calculatorSlice } from "./calculator/CalculatorSlice";

const rootReducer = combineReducers({
  [calculatorSlice.name]: calculatorSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store render");
});
