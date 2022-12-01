import { createContext, useReducer } from "react";

export const CartContext = createContext({
  toggled: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeProduct: () => {},
  cartCount: 0,
  cartTotal: 0
});

const addItemCart = (cartItems, product) => {
  const item = cartItems.find(item => item.id === product.id)
    
  if (item) item.quantity++
  else cartItems.push({...product, quantity: 1})

  return [...cartItems]
}

const removeItemCart = (cartItems, product) => {
  const item = cartItems.find(item => item.id === product.id)
  const ind = cartItems.indexOf(item)

  if (item) {
    item.quantity--
    if (item.quantity === 0) cartItems.splice(ind, 1)
  }

  return [...cartItems]
}

const clearProduct = (cartItems, product) => {
  const item = cartItems.find(item => item.id === product.id)

  if (item) return ([...cartItems.filter((cartItem) => cartItem.id !== product.id)])
  return [...cartItems]
}

export const CART_ACTION_TYPES = {
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
  SET_VISIBILITY: "SET_VISIBILITY"
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case CART_ACTION_TYPES.SET_VISIBILITY:
      return {
        ...state,
        toggled: payload
      }
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`Unhandeled action type ${type} in cartReducer`)
  }
}

const INITIAL_STATE = {
  toggled: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const CartProvider = ({ children }) => {
  const [{ toggle, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const setToggle = value => {dispatch({type: CART_ACTION_TYPES.SET_VISIBILITY, payload: value})}

  const updateCartItems = newCartItems => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0);

    dispatch({type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload: {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    }})
  }

  const addItemToCart = product => {
    const newCartItems = addItemCart(cartItems, product)
    updateCartItems(newCartItems)
  }

  const removeItemFromCart = product => {
    const newCartItems = removeItemCart(cartItems, product)
    updateCartItems(newCartItems)
  }

  const removeProduct = product => {
    const newCartItems = clearProduct(cartItems, product)
    updateCartItems(newCartItems)
  }

  const value = { toggle, setToggle, cartItems, addItemToCart, removeItemFromCart, removeProduct, cartCount, cartTotal };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
