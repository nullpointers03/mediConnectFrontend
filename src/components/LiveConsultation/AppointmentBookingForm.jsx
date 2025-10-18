import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../utils/appointmentSlice";

const AppointmentBookingForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    patientName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addAppointment(form));

    try {
      const res = await fetch("http://localhost:8000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      setSuccess(data);
    } catch (error) {
      alert("Failed to book appointment. Try again.");
    }
  };

  if (success) {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-10">
        <h2 className="text-xl font-bold mb-4">Appointment Confirmed</h2>
        <p>Patient Name: {success.patientName}</p>
        <p>Date: {success.date}</p>
        <p>Time: {success.time}</p>
        <p>Thank you for booking your consultation with us.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded shadow mt-10 space-y-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Book Consultation</h2>

      <input
        name="patientName"
        value={form.patientName}
        onChange={handleChange}
        placeholder="Patient Name"
        required
        className="border p-3 rounded w-full"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
        className="border p-3 rounded w-full"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="border p-3 rounded w-full"
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        type="date"
        required
        className="border p-3 rounded w-full"
      />
      <input
        name="time"
        value={form.time}
        onChange={handleChange}
        type="time"
        required
        className="border p-3 rounded w-full"
      />
      <textarea
        name="symptoms"
        value={form.symptoms}
        onChange={handleChange}
        placeholder="Describe your symptoms"
        rows="4"
        className="border p-3 rounded w-full"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentBookingForm;
