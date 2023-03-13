import { HomeLink, AuthLink, NavWrapper } from "./Header.styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase.js";
import { UserNav } from "../UserNav/UserNav";
export const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <NavWrapper>
      {user && (
        <>
          <HomeLink to="/" end>
            Home
          </HomeLink>
          <HomeLink to="/collection" end>
            Collection
          </HomeLink>
          <UserNav />
        </>
      )}
      {!user && (
        <>
          <HomeLink to="/" end>
            Home
          </HomeLink>
          <AuthLink to="/auth" end>
            Login
          </AuthLink>
        </>
      )}
    </NavWrapper>
  );
};
