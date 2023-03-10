import { useSelector, useDispatch } from "react-redux";

import { selectToggleState, selectCartCount } from "../../store/cart/cart.selector.ts";
import { setToggle } from "../../store/cart/cart.action.ts";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggled = useSelector(selectToggleState);
  const cartCount = useSelector(selectCartCount);

  const onClickHandler = () => dispatch(setToggle(!toggled))

  return (
    <CartIconContainer onClick={onClickHandler}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
