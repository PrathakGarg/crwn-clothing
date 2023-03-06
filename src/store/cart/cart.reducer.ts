import { AnyAction } from "redux";

import { CartItem } from "./cart.types";
import { setToggle, addItemToCart } from "./cart.action";

export type CartState = {
  toggled: boolean
  cartItems: CartItem[]
}

const CART_INITIAL_STATE = {
  toggled: false,
  cartItems: [] as CartItem[],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setToggle.match(action)) 
    return { ...state, toggled: action.payload };
  if (addItemToCart.match(action))
    return { ...state, cartItems: action.payload };

  return state;
};
