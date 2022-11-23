import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  toggled: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (product) => {
    const item = cartItems.find(item => item.id === product.id)
    
    if (item) item.quantity++
    else cartItems.push({...product, quantity: 1})

    setCartItems([...cartItems])
  }

  const removeItemFromCart = (product) => {
    const item = cartItems.find(item => item.id === product.id)
    const ind = cartItems.indexOf(item)

    if (item) {
      item.quantity--
      if (item.quantity === 0) cartItems.splice(ind, 1)
    }

    setCartItems([...cartItems])
  }

  const removeProduct = (product) => {
    const item = cartItems.find(item => item.id === product.id)
    const ind = cartItems.indexOf(item)

    if (item) cartItems.splice(ind, 1)

    setCartItems([...cartItems])
  }

  const value = { toggle, setToggle, cartItems, addItemToCart, removeItemFromCart, removeProduct, cartCount };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
