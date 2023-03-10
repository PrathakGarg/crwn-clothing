import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";

import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type SetToggle = ActionWithPayload<CART_ACTION_TYPES.SET_VISIBILITY, boolean>
export type UpdateCart = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>

const addItemCart = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item) item.quantity++;
  else cartItems.push({ ...product, quantity: 1 });

  return [...cartItems];
};

const removeItemCart = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item) {
    item.quantity--;
    
    const ind = cartItems.indexOf(item);
    if (item.quantity === 0) cartItems.splice(ind, 1);
  }

  return [...cartItems];
};

const clearProduct = (cartItems: CartItem[], product: CategoryItem): CartItem[] => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item)
    return [...cartItems.filter((cartItem) => cartItem.id !== product.id)];
  return [...cartItems];
};

export const setToggle = withMatcher((value: boolean): SetToggle => createAction(
  CART_ACTION_TYPES.SET_VISIBILITY,
  value
))

export const updateCart = withMatcher((cartItems: CartItem[]): UpdateCart => createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItem[], product: CategoryItem): UpdateCart => {
  const newCartItems = addItemCart(cartItems, product);
  return updateCart(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], product: CategoryItem): UpdateCart => {
  const newCartItems = removeItemCart(cartItems, product);
  return updateCart(newCartItems);
};

export const removeProduct = (cartItems: CartItem[], product: CategoryItem): UpdateCart => {
  const newCartItems = clearProduct(cartItems, product);
  return updateCart(newCartItems);
};
