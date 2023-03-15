import { HomeLink, AuthLink, NavWrapper, LinkWrappers } from "./Header.styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase.js";
import { UserNav } from "../UserNav/UserNav";
export const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <NavWrapper>
      <LinkWrappers>
        <HomeLink to="/" end>
          Home
        </HomeLink>
        <HomeLink to="/collection" end>
          Collection
        </HomeLink>
      </LinkWrappers>
      {user && <UserNav />}
      {!user && (
        <>
          <AuthLink to="/auth" end>
            Login
          </AuthLink>
        </>
      )}
    </NavWrapper>
  );
};
