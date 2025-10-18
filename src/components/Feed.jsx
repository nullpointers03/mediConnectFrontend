import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../userSlice.jsx";
import { useNavigate } from "react-router-dom";

function Feed() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(deleteUser());
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Welcome, {currentUser?.email}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Feed;
