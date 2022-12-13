import { 
  doc, 
  getDoc, 
  getFirestore, 
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs } from "firebase/firestore";

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export const getCollectionAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey)
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesArray = querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
  
  return categoriesArray;
}