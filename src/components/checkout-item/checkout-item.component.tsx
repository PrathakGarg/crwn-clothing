import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart, removeProduct } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";

import "./checkout-item.styles.scss";

type CheckoutItemProps = {
  product: CartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, product));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
  const clearItemHandler = () => dispatch(removeProduct(cartItems, product));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />  
      </div>
      <div className="name">{product.name}</div>
      <div className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{product.quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </div>
      <div className="price">{product.price}
      </div>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
