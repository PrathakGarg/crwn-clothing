import { useContext } from "react";

import { DropdownContext } from "../../contexts/cart-dropdown.context";

import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { toggle, setToggle } = useContext(DropdownContext);

  const onClickHandler = () => setToggle(!toggle)

  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
