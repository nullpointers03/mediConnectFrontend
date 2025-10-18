import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/feed" replace />;
};

export default PublicRoute;
