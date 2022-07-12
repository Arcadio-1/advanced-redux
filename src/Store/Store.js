import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import prodSlice from "./productsSlice";

const store = configureStore({
  reducer: { uiSlice: uiSlice, list: prodSlice },
});

export default store;
