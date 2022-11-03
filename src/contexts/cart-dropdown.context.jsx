import { createContext, useState, useEffect } from "react";

export const DropdownContext = createContext({
  toggled: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const DropdownProvider = ({ children }) => {
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

  const value = { toggle, setToggle, cartItems, addItemToCart, cartCount };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
