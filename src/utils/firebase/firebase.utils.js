import { initializeApp } from "firebase/app";
import { 
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBee2G4B-Zq_pJ_zps3Oiry_tqIfLNonEA",
  authDomain: "crwn-clothing-db-75598.firebaseapp.com",
  projectId: "crwn-clothing-db-75598",
  storageBucket: "crwn-clothing-db-75598.appspot.com",
  messagingSenderId: "830848804920",
  appId: "1:830848804920:web:f897138e70d56032979ecd"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    "prompt": "select_account"
})

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const created_at = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                created_at
            });
        }
        catch(error) {
            console.log("Error creating user", error.message);
        }
    }

    return userDocRef;
}