import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBooking } from "../../utils/labBookingSlice";
import { useNavigate } from "react-router-dom";

const AppointmentPage = () => {
  const { selectedLab, selectedSlot } = useSelector(state => state.labBooking);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!selectedLab || !selectedSlot) {
    return <div className="text-center mt-10">No appointment selected.</div>;
  }

  const handleConfirm = () => {
    alert(`Booked ${selectedLab.name} at ${selectedSlot}`);
    dispatch(clearBooking());
    navigate("/");
  };

  return (
    <div className="w-full max-w-xl mx-auto min-h-screen pt-12 flex flex-col items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 mt-8 w-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">Confirm Appointment</h2>
        <div className="text-lg text-gray-800 mb-2">{selectedLab.name}</div>
        <div className="text-gray-500 mb-2">📍 {selectedLab.distance} | ⭐ {selectedLab.rating}</div>
        <div className="mb-4 text-gray-600">Selected Slot: <span className="text-blue-700 font-semibold">{selectedSlot}</span></div>
        <button
          className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg shadow hover:bg-blue-700"
          onClick={handleConfirm}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default AppointmentPage;
