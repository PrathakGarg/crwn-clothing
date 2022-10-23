import FormInput from "../form-input/form-input.component";
import Button from "../Button/button.component";

import { useState, useContext } from "react";

import {
  signInWithEmailAndPasswordCustom,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firestore.utils";
import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const loginGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const { userDocRef } = await createUserDocumentFromAuth(user);

    setCurrentUser(user);
  };

  const loginEmailPassword = async (email, password) => {
      const { user } = await signInWithEmailAndPasswordCustom(email, password);
      const { userDocRef, exists } = await getUserDocumentFromAuth(user);

      if (exists) setCurrentUser(user);

      return userDocRef;
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { email, password } = event.target;
    email = email.value;
    password = password.value;

    try {
      const userDocRef = await loginEmailPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Account with this email address does not exist");
          break;
        case "auth/wrong-password":
          alert("Email address or password is incorrect");
          break;
        default:
          alert("Some error occured");
          console.error("Error:", error.message)
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="button-div">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={loginGooglePopup} buttonType="google">
            Sign In with Google
          </Button>
        </div>
      </form>

      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google (Redirect)
      </button> */}
    </div>
  );
};

export default SignInForm;
