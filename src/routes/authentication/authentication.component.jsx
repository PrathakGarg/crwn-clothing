// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss"

const Authentication = () => {
  // useEffect(() => {
  //   const getRedRes = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   getRedRes();
  // }, []);

  

  return (
    <div className="auth-page-container">
      <SignInForm />
      {/* <SignInForm 
        onClickEvent={signInWithGoogleRedirect}/> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
