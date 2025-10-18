import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addConsultation } from "../../utils/consultationSlice.jsx";
import { useNavigate } from "react-router-dom";

const LiveConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: "fb",
    age: "25",
    gender: "male",
    symptoms: "fever",
    disease: "none"
  });

  console.log(formData)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in Redux
    dispatch(addConsultation(formData));

    // Navigate to chat page
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border-t-4 border-blue-500"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          🩺 Live Consultation
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <textarea
          name="symptoms"
          placeholder="Describe your symptoms..."
          value={formData.symptoms}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="disease"
          placeholder="Suspected Disease (optional)"
          value={formData.disease}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          Start Consultation
        </button>
      </form>
    </div>
  );
};

export default LiveConsultationPage;
