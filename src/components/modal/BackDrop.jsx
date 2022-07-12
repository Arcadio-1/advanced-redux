import { useDispatch } from "react-redux";
import { showCartAction } from "../../Store/showCart";
const BackDrop = () => {
  const dispatchShowCart = useDispatch();

  const closeCartHandler = () => {
    dispatchShowCart(showCartAction.showTaggol());
  };
  return <div onClick={closeCartHandler} className="backDrop"></div>;
};
export default BackDrop;
