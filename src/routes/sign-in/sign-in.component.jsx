import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const loginGoogle = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);

        createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={loginGoogle}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;