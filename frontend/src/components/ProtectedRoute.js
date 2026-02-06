import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

const PrivateRoute = ({ children }) => {
  // If user is NOT logged in, redirect to login page
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
};

export default PrivateRoute;
