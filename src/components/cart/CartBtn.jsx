import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../Store/uiSlice";
const CartBtn = () => {
  const totalAmount = useSelector((state) => state.list.totalAmount);
  const dispatchShowCart = useDispatch();
  const showCartHandler = () => {
    dispatchShowCart(uiAction.showTaggol());
  };
  return (
    <button onClick={showCartHandler} className="header-nav-showCartBtn">
      <span>my cart</span>
      <span className="header-nav-showCartBtn-amount">{totalAmount}</span>
    </button>
  );
};
export default CartBtn;
