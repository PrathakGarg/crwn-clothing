import { FC } from "react";

import { CartItem as CartItemType } from "../../store/cart/cart.types";

import "./cart-item.styles.scss";

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="item-details">{name}</span>
        <span>{quantity} x ${price}</span>
      </div>
    </div>
  );
});

export default CartItem;
