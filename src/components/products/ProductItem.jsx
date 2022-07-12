import { useDispatch, useSelector } from "react-redux";
import { prodSlidAction } from "../../Store/Products";
import { useEffect } from "react";
import useHttp from "../../Hook/useHttp";
const ProductItem = (props) => {
  const dispathOrdring = useDispatch();
  const orderList = useSelector((state) => state.list.orderList);

  const ordringHandler = () => {
    dispathOrdring(prodSlidAction.addToCart(props.item));
  };

  const {
    error: sendError,
    sendIsLoading,
    sendRequest: sendPutRequest,
  } = useHttp();

  useEffect(() => {
    const sendRequestConfig = {
      url: "https://vast-verve-344100-default-rtdb.firebaseio.com/mealsOrder.json",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: orderList,
    };
    sendPutRequest(sendRequestConfig);
  }, [orderList]);

  return (
    <li className="main-list-item" id={props.item.id}>
      <div className="main-list-item-deatils">
        <h2 className="main-list-item-deatils-name">{props.item.name}</h2>
        <p className="main-list-item-deatils-description">{props.item.desc}</p>
      </div>
      <div className="main-list-item-priceAndOrder">
        <p className="main-list-item-priceAndOrder-price">{props.item.price}</p>
        <button
          onClick={ordringHandler}
          className="main-list-item-priceAndOrder-order"
        >
          Buy
        </button>
      </div>
    </li>
  );
};
export default ProductItem;
