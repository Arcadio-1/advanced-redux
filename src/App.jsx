import { Fragment, useEffect } from "react";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import ProductTitle from "./components/products/ProductTitle";
import ProductList from "./components/products/ProductList";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useHttp from "./Hook/useHttp";
import Notification from "./components/layout/Notification";
import { prodAction } from "./Store/productsSlice";
import { uiAction } from "./Store/uiSlice";
function App() {
  const isShowCart = useSelector((state) => state.uiSlice.isShowCart);
  const orderList = useSelector((state) => state.list.orderList);
  const totalAmount = useSelector((state) => state.list.totalAmount);
  const {
    error: getProdListError,
    isLoading: getProdListLoading,
    sendRequest: getProdListRequest,
  } = useHttp();
  const {
    error: getOrderListError,
    isLoading: getOrderListLoading,
    sendRequest: getOrderListRequest,
  } = useHttp();

  const {
    error: sendOrderError,
    isLoading: sendOrderLoading,
    sendRequest: sendOrderRequest,
  } = useHttp();

  const dispatchProdList = useDispatch();
  const dispatchOrderList = useDispatch();
  const dispatchNotification = useDispatch();

  useEffect(() => {
    const getProdListRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/meals.json",
    };
    const createProdList = (data) => {
      const prodList = [];
      for (const key in data) {
        prodList.push({
          id: key,
          name: data[key].name,
          desc: data[key].desc,
          price: data[key].price,
        });
      }
      if (!getProdListError) {
        dispatchProdList(prodAction.setProdList(prodList));
      }
    };
    getProdListRequest(getProdListRequestConfig, createProdList);
  }, [dispatchProdList, getProdListRequest]);

  useEffect(() => {
    const getOrderListRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/mealsOrder.json",
    };
    const createOrderList = (data) => {
      if (!getOrderListError) {
        dispatchOrderList(
          prodAction.replaceOrderListData({
            orderList: data[1] || [],
            totalAmount: data[0].totalAmount || 0,
          })
        );
      }
    };
    getOrderListRequest(getOrderListRequestConfig, createOrderList);
  }, []);

  useEffect(() => {
    const sendRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/mealsOrder.json",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: [{ totalAmount: totalAmount }, [...orderList]],
    };
    const loger = (data) => {};
    sendOrderRequest(sendRequestConfig, loger);

    sendOrderError &&
      dispatchNotification(
        uiAction.setNotification({
          status: "error",
          massage: "somthing went wrong",
        })
      );
    !sendOrderError &&
      !sendOrderLoading &&
      dispatchNotification(
        uiAction.setNotification({
          status: "succes",
          massage: "succesfuly",
        })
      );
    sendOrderLoading &&
      dispatchNotification(
        uiAction.setNotification({
          status: "pending",
          massage: "Loading...",
        })
      );
  }, [orderList]);

  return (
    <Fragment>
      <Notification></Notification>
      {isShowCart && (
        <Cart isLoading={getOrderListLoading} hasError={getOrderListError} />
      )}
      <Header />
      <main className="main">
        <ProductTitle />
        {getProdListLoading && <p>Loading...</p>}
        {getProdListError && <p>Somthing Went Wrong please Try Again</p>}
        {!getProdListLoading && !getProdListError && <ProductList />}
      </main>
    </Fragment>
  );
}

export default App;
