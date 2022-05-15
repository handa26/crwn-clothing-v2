import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()

    const userDocRef = await createUserDocumentFromAuth(response.user);
  }

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>
        Sign In With Google
      </button>
    </div>
  );
};

export default SignIn;
