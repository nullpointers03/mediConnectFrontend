import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../userSlice.jsx";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "rashmika@gmail.com", password: "rashmikA@123" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(form);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8000/login", form, {
      withCredentials: true,
    });

    

    // ✅ Either check message or directly assume success if status is 200
    if (res.status === 200 && res.data.user) {
      dispatch(addUser(res.data.user));
      navigate("/feed");
    } else {
      alert(res.data.message || "Login failed!");
    }
  } catch (err) {
    console.log(err);
    alert("Invalid credentials!");
  }
};


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-800 p-8 rounded-2xl shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 bg-gray-700 rounded focus:outline-none"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 bg-gray-700 rounded focus:outline-none"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded"
//         >
//           Login
//         </button>
//         <p className="text-sm mt-4 text-center text-gray-400">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-blue-400 hover:underline">
//             Create one
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-96"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="p-2 bg-blue-400 rounded-full text-white mb-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12h6m-3-3v6" />
            </svg>
          </div>
          <span className="font-bold text-blue-700 text-xl">MedConnect</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-5">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md transition-colors"
        >
          Sign in
        </button>
        <p className="text-sm mt-4 text-center text-blue-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline font-medium">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;


