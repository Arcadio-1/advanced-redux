import { createSlice } from "@reduxjs/toolkit";
const initialState = { prodList: [], totalAmount: 0, orderList: [] };
const prodSlice = createSlice({
  name: "prodList",
  initialState,
  reducers: {
    setProdList(state, action) {
      state.prodList = action.payload;
    },
    setOrderList(state, action) {
      state.orderList = action.payload;
    },
    addToCart(state, action) {
      state.totalAmount++;
      const existingItemIndex = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.orderList[existingItemIndex];
      if (existingItem) {
        state.orderList[existingItemIndex].amount++;
      } else {
        state.orderList.push({ amount: 1, ...action.payload });
      }
    },
    removeFromCart(state, action) {
      state.totalAmount--;
      const existingItemIndex = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.orderList[existingItemIndex].amount > 1) {
        state.orderList[existingItemIndex].amount--;
      } else {
        state.orderList = state.orderList.filter(
          (item) => item.id !== state.orderList[existingItemIndex].id
        );
      }
    },
  },
});
export const prodSlidAction = prodSlice.actions;
export default prodSlice.reducer;
