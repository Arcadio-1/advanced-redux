import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const list = useSelector((state) => state.list.prodList);
  return (
    <ul className="main-list">
      {list.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default ProductList;
