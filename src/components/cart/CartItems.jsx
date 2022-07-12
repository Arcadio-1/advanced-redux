import { useDispatch } from "react-redux/es/exports";
import { prodSlidAction } from "../../Store/Products";
const CartItems = (props) => {
  const dispatchAmount = useDispatch();
  const upHandler = () => {
    dispatchAmount(prodSlidAction.addToCart(props.item));
  };
  const downHandler = () => {
    dispatchAmount(prodSlidAction.removeFromCart(props.item));
  };
  return (
    <li className="cart-list-item">
      <div className="cart-list-item-details">
        <h2 className="cart-list-item-details-name">{props.item.name}</h2>
        <p className="cart-list-item-details-amount">x{props.item.amount}</p>
      </div>
      <div className="cart-list-item-ordringDetails">
        <p className="cart-list-item-ordringDetails-price">
          <span className="cart-list-item-ordringDetails-price-totalAmount">
            ${(props.item.price * props.item.amount).toFixed(2)}
          </span>
          <span className="cart-list-item-ordringDetails-price-singlePrice">
            ${props.item.price.toFixed(2)}/items
          </span>
        </p>
        <div className="cart-list-item-amountAction">
          <button
            onClick={upHandler}
            className="cart-list-item-amountAction-increase"
          >
            +
          </button>
          <button
            onClick={downHandler}
            className="cart-list-item-amountAction-decrease"
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
};
export default CartItems;
