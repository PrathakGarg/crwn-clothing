import { CART_ACTION_TYPES, CartItem, Product } from "./cart.types";

import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type SetToggle = ActionWithPayload<CART_ACTION_TYPES.SET_VISIBILITY, boolean>
export type UpdateCart = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>

const addItemCart = (cartItems: CartItem[], product: Product): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item) item.quantity++;
  else cartItems.push({ ...product, quantity: 1 });

  return [...cartItems];
};

const removeItemCart = (cartItems: CartItem[], product: Product): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item) {
    item.quantity--;
    
    const ind = cartItems.indexOf(item);
    if (item.quantity === 0) cartItems.splice(ind, 1);
  }

  return [...cartItems];
};

const clearProduct = (cartItems: CartItem[], product: Product): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item)
    return [...cartItems.filter((cartItem) => cartItem.id !== product.id)];
  return [...cartItems];
};

export const setToggle = withMatcher((value: boolean): SetToggle => createAction(
  CART_ACTION_TYPES.SET_VISIBILITY,
  value
))

export const addItemToCart = withMatcher((cartItems: CartItem[], product: Product): UpdateCart => {
  const newCartItems = addItemCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems)
});

export const removeItemFromCart = withMatcher((cartItems: CartItem[], product: Product): UpdateCart => {
  const newCartItems = removeItemCart(cartItems, product);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems)
});

export const removeProduct = withMatcher((cartItems: CartItem[], product: Product): UpdateCart => {
  const newCartItems = clearProduct(cartItems, product);
  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems)
});
