import { useState } from "react";
import { useDispatch } from "react-redux"; 

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_CLASSES } from "../Button/button.component";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action.ts";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart())
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password))
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
          <Button type="button" onClick={handleGoogleSignIn} buttonType={BUTTON_CLASSES.google}>
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
