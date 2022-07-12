import useHttp from "../Hook/useHttp";
import { prodAction } from "./productsSlice";

export const gethOrderListData = () => {
  return async (dispatch) => {
    const {
      error: getOrderListError,
      isLoading: getOrderListLoading,
      sendRequest: getOrderListRequest,
    } = useHttp();
    const getOrderListRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/mealsOrder.json",
    };
    const createOrderList = (data) => {
      if (!getOrderListError) {
        dispatch(
          prodAction.replaceOrderListData({
            orderList: data[1] || [],
            totalAmount: data[0].totalAmount || 0,
          })
        );
      }
    };
    getOrderListRequest(getOrderListRequestConfig, createOrderList);
  };
};
export const sendOrderList = () => {
  return async (dispatch) => {};
};
