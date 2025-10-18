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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:8000/signup",
      {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      },
      {
        withCredentials: true, // allow cookies
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    

    if (res.data.success) {
      alert("Signup successful! Please login.");
      navigate("/"); // go to login page
    }
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Signup failed! Please try again.");
  }
};


 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Create Account
        </h2>

        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
        />

        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded"
        >
          Signup
        </button>

        <p className="text-sm mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
