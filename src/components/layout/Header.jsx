import CartBtn from "../cart/CartBtn";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">reduxCart</h1>
      <nav className="header-nav">
        <CartBtn />
      </nav>
    </header>
  );
};
export default Header;
