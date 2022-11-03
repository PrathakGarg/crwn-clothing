// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { UserContext } from "../../contexts/user.context";

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
  const { currentUser } = useContext(UserContext)

  if (currentUser) return (<Navigate to={"/"} replace={true} />)
  
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
