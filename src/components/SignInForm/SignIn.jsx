import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import { auth } from "../../utils/firebase.js";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import {
  AuthWrapper,
  AuthTitleH2,
  AuthTitleH3,
  AuthBtnWrapper,
  AuthButton,
  Wrapper,
  ButtonBox,
  ButtonText,
} from "./SignIn.styled.js";

export default function SignIn() {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const userKey = result.user.uid;

      localStorage.setItem("USER_KEY", userKey);
    } catch (error) {
      console.log(error);
    }
  };

  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const userKey = result.user.uid;

      localStorage.setItem("USER_KEY", userKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthWrapper>
      <Wrapper>
        <AuthTitleH2>Join today</AuthTitleH2>
        <AuthTitleH3>Sign in with one of the providers</AuthTitleH3>
        <AuthBtnWrapper>
          <AuthButton onClick={GoogleLogin}>
            <ButtonBox>
              <FcGoogle size={20} />

              <ButtonText>Sign in with Google</ButtonText>
            </ButtonBox>
          </AuthButton>
          <AuthButton onClick={FacebookLogin}>
            <ButtonBox>
              <AiFillFacebook size={20} color={"#1977F3"} />
              <ButtonText>Sign in with Facebook</ButtonText>
            </ButtonBox>
          </AuthButton>
        </AuthBtnWrapper>
      </Wrapper>
    </AuthWrapper>
  );
}
