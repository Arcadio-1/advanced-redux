import { Fragment, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import ProductTitle from "./components/products/ProductTitle";
import ProductList from "./components/products/ProductList";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useHttp from "./Hook/useHttp";
import { prodSlidAction } from "./Store/Products";

function App() {
  const isShowCart = useSelector((state) => state.showCart.isShowCart);

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

  const dispatchProdList = useDispatch();
  const dispatchOrderList = useDispatch();

  useEffect(() => {
    const prodListRequestConfig = {
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
        dispatchProdList(prodSlidAction.setProdList(prodList));
      }
    };
    getProdListRequest(prodListRequestConfig, createProdList);
  }, [dispatchProdList, getProdListRequest]);
  ////////////////////
  useEffect(() => {
    const OrderListRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/mealsOrder.json",
    };
    const createOrderList = (data) => {
      const orderList = [];
      for (const key in data) {
        orderList.push({
          id: data[key].id,
          name: data[key].name,
          desc: data[key].desc,
          price: data[key].price,
          amount: data[key].amount,
        });
      }
      if (!getOrderListError) {
        dispatchOrderList(prodSlidAction.setOrderList(orderList));
      }
    };
    getProdListRequest(OrderListRequestConfig, createOrderList);
  }, []);
  ////////////////////////
  return (
    <Fragment>
      {isShowCart && <Cart />}
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
