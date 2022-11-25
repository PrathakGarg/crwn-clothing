import { useContext } from "react";

import { CartContext } from "../../contexts/cart-dropdown.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, removeItemFromCart, removeProduct } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(product)
  const addItemHandler = () => addItemToCart(product)
  const clearItemHandler = () => removeProduct(product)

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
