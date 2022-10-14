import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firestore.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const getRedRes = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    getRedRes();
  }, []);

  const loginGooglePopup = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);

    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={loginGooglePopup}>
        Sign In with Google (Popup)
      </button>

      <br />

      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google (Redirect)
      </button>

      <SignUp />
    </div>
  );
};

export default SignIn;
