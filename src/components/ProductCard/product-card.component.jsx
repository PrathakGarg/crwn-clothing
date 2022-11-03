import { useContext } from "react";

import Button from "../Button/button.component";
import { DropdownContext } from "../../contexts/cart-dropdown.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(DropdownContext)
  const { name, imageUrl, price } = product;

  const addProduct = () => {
    addItemToCart(product)
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button buttonType="inverted" onClick={addProduct}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
