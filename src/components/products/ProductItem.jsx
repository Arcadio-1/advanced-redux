import { useDispatch } from "react-redux";
import { prodAction } from "../../Store/productsSlice";
const ProductItem = (props) => {
  const dispathOrdring = useDispatch();

  const ordringHandler = () => {
    dispathOrdring(prodAction.addToCart(props.item));
  };
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
