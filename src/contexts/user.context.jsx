import { useState, useEffect, createContext } from "react";
import { authStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firestore.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authStateChangedListener((user) => {
      setCurrentUser(user)
      if (user) createUserDocumentFromAuth(user);

      console.log(user)
    })
    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
