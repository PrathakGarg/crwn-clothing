import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  toggled: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_VISIBILITY:
      return {
        ...state,
        toggled: payload,
      };
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
