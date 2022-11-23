import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart-dropdown.context"

import "./checkout.styles.scss"

const Checkout = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <div className="checkout-container">
            {cartItems.map(product => <CheckoutItem key={product.id} product={product}/>)}
        </div>
    )
}

export default Checkout