import Modal from "../modal/Modal";
import CartItems from "./CartItems";
import { useSelector } from "react-redux/es/exports";

const Cart = (props) => {
  const orderList = useSelector((state) => state.list.orderList);
  const { hasError, isLoading } = props;
  return (
    <Modal>
      <div className="cart">
        <h2 className="cart-title">your shoping cart</h2>
        {isLoading && <p>Loading</p>}
        {hasError && !isLoading && <p>Something Went Wrong</p>}
        {!isLoading && !hasError && (
          <ul className="cart-list">
            {orderList.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
