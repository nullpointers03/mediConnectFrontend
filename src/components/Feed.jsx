import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../userSlice.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import FeedNavbar from "./Features/FeedNavBar.jsx";
import Body from "./Features/Body.jsx";

function Feed() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/");
  };

  // Protect route: redirect if not logged in
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Body/>
  );
}

export default Feed;
