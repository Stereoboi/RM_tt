import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase.js";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/auth",
}) => {
  const [user] = useAuthState(auth);

  return !user ? <Navigate to={redirectTo} /> : Component;
};
