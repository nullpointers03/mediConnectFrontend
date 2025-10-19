import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBooking } from "../../utils/labBookingSlice";
import { addAppointment } from "../../utils/appointmentSlice"; 
import { useNavigate } from "react-router-dom";

const AppointmentPage = () => {
  const { selectedLab, selectedSlot } = useSelector(state => state.labBooking);
  const appointments = useSelector(state => state.labBooking.appointments || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    if (!selectedLab || !selectedSlot) {
      setOrderConfirmed(false);
    }
  }, [selectedLab, selectedSlot]);

  if (!selectedLab || !selectedSlot) {
    return <div className="text-center mt-10">No appointment selected.</div>;
  }

  const handleConfirm = () => {
    const appointmentData = {
      id: Date.now(),
      lab: selectedLab,
      slot: selectedSlot,
      date: new Date().toISOString(),
    };
    // Save appointment in Redux and localStorage
    dispatch(addAppointment(appointmentData));
   // dispatch(clearBooking());
    setOrderConfirmed(true);
    alert(`Booked ${selectedLab.name} at ${selectedSlot}`);
    // Optionally navigate or clear form here
  };

  console.log("Appointments:", appointments)

  return (
    <div className="w-full max-w-xl mx-auto min-h-screen pt-12 flex flex-col items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 mt-8 w-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">Confirm Appointment</h2>
        <div className="text-lg text-gray-800 mb-2">{selectedLab.name}</div>
        <div className="text-gray-500 mb-2">📍 {selectedLab.distance} | ⭐ {selectedLab.rating}</div>
        <div className="mb-4 text-gray-600">
          Selected Slot: <span className="text-blue-700 font-semibold">{selectedSlot}</span>
        </div>
        {!orderConfirmed ? (
          <button
            className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg shadow hover:bg-blue-700"
            onClick={handleConfirm}
          >
            Confirm Booking
          </button>
        ) : (
          <div className="text-green-700 font-semibold text-lg mb-3">
            Booking Confirmed!
          </div>
        )}
      </div>

      {/* List all confirmed appointments */}
      <div className="w-full max-w-xl mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Confirmed Appointments</h3>
        {appointments.length > 0 ? (
          appointments.map(apt => (
            <div key={apt.id} className="bg-white rounded-lg shadow-md p-4 mb-3">
              <div className="font-bold text-lg">{apt.lab.name}</div>
              <div className="text-sm text-gray-600">Slot: {apt.slot}</div>
              <div className="text-sm text-gray-500">
                Date: {new Date(apt.date).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No confirmed appointments yet.</div>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;


