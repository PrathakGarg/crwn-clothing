import { useContext } from "react";

import { CartContext } from "../../contexts/cart-dropdown.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { addItemToCart, removeItemFromCart, removeProduct } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />  
      </div>
      <div className="name">{product.name}</div>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(product)}>&lt;</div>
        <div className="value">{product.quantity}</div>
        <div className="arrow" onClick={() => addItemToCart(product)}>&gt;</div>
      </div>
      <div className="price">{product.price}
      </div>
      <div className="remove-button" onClick={() => removeProduct(product)}>X</div>
    </div>
  );
};

export default CheckoutItem;
