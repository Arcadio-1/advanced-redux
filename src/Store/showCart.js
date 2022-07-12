import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isShowCart: false,
};
const showCartSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    showTaggol(state) {
      state.isShowCart = !state.isShowCart;
    },
  },
});
export const showCartAction = showCartSlice.actions;
export default showCartSlice.reducer;
