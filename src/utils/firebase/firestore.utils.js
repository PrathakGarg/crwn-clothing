import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const getUser = getUserDocumentFromAuth(userAuth);
  const { userDocRef, exists } = await getUser;

  if (!exists) {
    const { displayName, email } = userAuth;
    const created_at = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        created_at, 
        ...additionalInfo});
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  }

  return userDocRef;
};

export const getUserDocumentFromAuth = async (userAuth) => {
  const respObject = {
    userDocRef: null,
    exists: false
  }

  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  respObject.userDocRef = userDocRef;

  if (!userSnapshot.exists()) {
    return respObject
  };

  respObject.exists = true;
  return respObject;
}
