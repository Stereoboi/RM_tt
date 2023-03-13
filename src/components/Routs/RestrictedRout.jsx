import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const [user] = useAuthState(auth);

  return user ? <Navigate to={redirectTo} /> : Component;
};
