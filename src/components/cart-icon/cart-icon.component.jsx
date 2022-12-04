import { useContext } from "react";

import { CartContext } from "../../contexts/cart-dropdown.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { toggled, setToggle, cartCount } = useContext(CartContext);

  const onClickHandler = () => setToggle(!toggled)

  return (
    <CartIconContainer onClick={onClickHandler}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
