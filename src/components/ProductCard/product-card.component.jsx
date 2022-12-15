import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_CLASSES } from "../Button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price } = product;

  const addProduct = () => {
    dispatch(addItemToCart(cartItems, product))
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button buttonType={BUTTON_CLASSES.inverted} onClick={addProduct}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
