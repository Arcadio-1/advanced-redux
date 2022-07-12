import { useDispatch } from "react-redux";
import { uiAction } from "../../Store/uiSlice";
const BackDrop = () => {
  const dispatchShowCart = useDispatch();

  const closeCartHandler = () => {
    dispatchShowCart(uiAction.showTaggol());
  };
  return <div onClick={closeCartHandler} className="backDrop"></div>;
};
export default BackDrop;
