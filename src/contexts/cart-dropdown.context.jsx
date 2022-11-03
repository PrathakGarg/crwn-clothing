import { createContext, useState } from "react";

export const DropdownContext = createContext({
  toggled: true,
  setToggle: () => {}
});

export const DropdownProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const value = { toggle, setToggle };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
