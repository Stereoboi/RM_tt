import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase.js";
import { CiLogin } from "react-icons/ci";

import {
  UserWrapper,
  UserImage,
  Username,
  LogOutBtn,
} from "./UserNav.styled.js";
export const UserNav = () => {
  const [user, loading] = useAuthState(auth);
  const logOut = () => {
    auth.signOut();
    localStorage.removeItem("USER_KEY");
  };
  return (
    <UserWrapper>
      <Username>{user.displayName}</Username>
      <UserImage src={user.photoURL} referrerPolicy="no-referrer" />
      <LogOutBtn onClick={logOut}>
        Sign Out
        <CiLogin />
      </LogOutBtn>
    </UserWrapper>
  );
};
