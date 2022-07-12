import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isShowCart: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    showTaggol(state) {
      state.isShowCart = !state.isShowCart;
    },
    setNotification(state, actions) {
      if (actions.payload.status === "pending") {
        state.notification = actions.payload.massage;
      }
      if (actions.payload.status === "error") {
        state.notification = actions.payload.massage;
      }
      if (actions.payload.status === "succes") {
        state.notification = actions.payload.massage;
      }
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
