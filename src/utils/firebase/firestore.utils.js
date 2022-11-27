import { 
  doc, 
  getDoc, 
  getFirestore, 
  setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const { userDocRef, exists } = await getUserDocumentFromAuth(userAuth);

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
  respObject.exists = userSnapshot.exists();

  return respObject;
}

export const getUserDetails = async (userDocRef) => {
  let userData = {
    created_at: null,
    displayName: null,
    email: null,
    exists: false
  }

  const userSnapshot = await getDoc(userDocRef);
  const data = userSnapshot.data()
  
  userData = {...userData, ...data, exists: userSnapshot.exists()}

  return userData;
}
