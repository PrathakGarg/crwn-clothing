import { memo } from "react";

import "./cart-item.styles.scss";

const CartItem = memo(({ cartItem }) => {
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
