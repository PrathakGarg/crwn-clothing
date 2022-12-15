import { CART_ACTION_TYPES } from "./cart.types";

const addItemCart = (cartItems, product) => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item) item.quantity++;
  else cartItems.push({ ...product, quantity: 1 });

  return [...cartItems];
};

const removeItemCart = (cartItems, product) => {
  const item = cartItems.find((item) => item.id === product.id);
  const ind = cartItems.indexOf(item);

  if (item) {
    item.quantity--;
    if (item.quantity === 0) cartItems.splice(ind, 1);
  }

  return [...cartItems];
};

const clearProduct = (cartItems, product) => {
  const item = cartItems.find((item) => item.id === product.id);

  if (item)
    return [...cartItems.filter((cartItem) => cartItem.id !== product.id)];
  return [...cartItems];
};

export const setToggle = (value) => ({
  type: CART_ACTION_TYPES.SET_VISIBILITY,
  payload: value,
});

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addItemCart(cartItems, product);
  return { type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeItemCart(cartItems, product);
  return { type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems };
};

export const removeProduct = (cartItems, product) => {
  const newCartItems = clearProduct(cartItems, product);
  return { type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: newCartItems };
};
