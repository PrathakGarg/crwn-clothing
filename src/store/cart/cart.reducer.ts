import { AnyAction } from "redux";

import { CartItem } from "./cart.types";
import { setToggle, updateCart } from "./cart.action";

export type CartState = {
  readonly toggled: boolean
  readonly cartItems: CartItem[]
}

const CART_INITIAL_STATE: CartState = {
  toggled: false,
  cartItems: [] as CartItem[],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setToggle.match(action)) 
    return { ...state, toggled: action.payload };
  if (updateCart.match(action))
    return { ...state, cartItems: action.payload };

  return state;
};
