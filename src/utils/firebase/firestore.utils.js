import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const created_at = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        created_at, 
        ...additionalInfo});
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
