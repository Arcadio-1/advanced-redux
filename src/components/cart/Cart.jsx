import Modal from "../modal/Modal";
import CartItems from "./CartItems";
import { useSelector } from "react-redux/es/exports";

const Cart = () => {
  const orderList = useSelector((state) => state.list.orderList);

  return (
    <Modal>
      <div className="cart">
        <h2 className="cart-title">your shoping cart</h2>
        <ul className="cart-list">
          {orderList.map((item) => (
            <CartItems key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Modal>
  );
};
export default Cart;
