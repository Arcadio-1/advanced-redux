import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./showCart";
import prodSlice from "./Products";

const store = configureStore({
  reducer: { showCart: showCartSlice, list: prodSlice },
});

export default store;
