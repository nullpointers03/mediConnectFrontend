import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  console.log(form);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8000/signup", form, {
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
//         <h2 className="text-2xl font-bold text-center mb-6 text-white">
//           Create Account
//         </h2>

//         <input
//           name="firstName"
//           type="text"
//           placeholder="First Name"
//           className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
//           value={form.firstName}
//           onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//           required
//         />

//         <input
//           name="lastName"
//           type="text"
//           placeholder="Last Name"
//           className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
//           value={form.lastName}
//           onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//           required
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-600 p-2 rounded"
//         >
//           Signup
//         </button>

//         <p className="text-sm mt-4 text-center text-gray-400">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-400 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }


return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-200 to-blue-400">
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
          Create Account
        </h2>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="w-full mb-4 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="w-full mb-4 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-md shadow-md transition-colors"
        >
          Signup
        </button>
        <p className="text-sm mt-4 text-center text-blue-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;




