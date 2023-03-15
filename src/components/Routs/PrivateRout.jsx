import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase.js";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/auth",
}) => {
  const [user, loading] = useAuthState(auth);
  const result = localStorage.getItem("USER_KEY");
  return !result ? <Navigate to={redirectTo} /> : Component;
};
