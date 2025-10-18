import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookLabTest } from "../../utils/labBookingSlice"; // adjust import path as needed


// Example data with 30+ tests
const testLabs = [
  {
    name: "LifeCare Diagnostics",
    distance: "2.3 km",
    rating: 4.8,
    homePickup: true,
    slots: ["9:00 AM", "11:00 AM", "2:00 PM"]
  },
  {
    name: "MediPath Labs",
    distance: "3.1 km",
    rating: 4.6,
    homePickup: true,
    slots: ["10:00 AM", "1:00 PM", "4:00 PM"]
  },
  {
    name: "HealthFirst Laboratory",
    distance: "4.5 km",
    rating: 4.9,
    homePickup: false,
    slots: ["8:00 AM", "12:00 PM", "3:00 PM"]
  },
  // Add 27+ more entries
  ...Array.from({length: 27}, (_,i) => ({
    name: `Premium Lab Test ${i+1}`,
    distance: `${(2.5 + i*0.3).toFixed(1)} km`,
    rating: (4.0 + (i%10)/10).toFixed(1),
    homePickup: i % 2 === 0,
    slots: ["8:00 AM", "1:00 PM", "6:00 PM"]
  }))
];

const LabTestPage = () => {
  const [selectedSlot, setSelectedSlot] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookAppointment = (lab) => {
    if (!selectedSlot[lab.name]) {
      alert("Please select a slot before booking.");
      return;
    }
    dispatch(bookLabTest({ lab, slot: selectedSlot[lab.name] }));
    navigate("/appointment");
  };

  return (
    <div className="w-full max-w-2xl mx-auto min-h-screen bg-gray-50 pt-7 pb-14 px-2 flex flex-col gap-7">
      {/* Home Sample Collection Banner */}
      <section className="border border-cyan-300 bg-cyan-50 rounded-xl p-5 flex flex-col gap-2 items-start mb-4 shadow">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-cyan-600 rounded-full p-2 text-white shadow">
            <svg width="24" height="24" fill="none"><path d="M12 3L2 12h2v8h7v-5h2v5h7v-8h2L12 3z" fill="currentColor"/></svg>
          </div>
          <div>
            <div className="text-cyan-900 font-bold text-base">Home Sample Collection</div>
            <div className="text-sm text-gray-600">Get sample collected at your doorstep for just ₹50</div>
          </div>
        </div>
        <button className="bg-cyan-600 text-white rounded font-semibold py-2 px-6 shadow hover:bg-cyan-700 transition outline-none">
          Book Home Collection
        </button>
      </section>

      <span className="text-sm text-gray-400 mb-1">Or visit a lab</span>

      <section className="flex flex-col gap-6">
        {testLabs.map((lab, index) => (
          <div
            className="rounded-2xl bg-white shadow-lg border px-5 py-5 flex flex-col gap-2 relative hover:shadow-xl transition"
            key={lab.name+index}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex flex-col gap-[2px]">
                <span className="font-semibold text-lg text-gray-800">{lab.name}</span>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📍 {lab.distance}</span>
                  <span>⭐ {lab.rating}</span>
                </div>
              </div>
              {lab.homePickup && (
                <span className="bg-green-100 text-green-600 rounded px-2 py-[2px] text-xs font-semibold ml-3">Home pickup</span>
              )}
            </div>
            <div className="text-xs text-gray-500">Available slots today</div>
            <div className="flex gap-2 my-2">
              {lab.slots.map(time => (
                <button
                  key={time}
                  onClick={() =>
                    setSelectedSlot(s => ({
                      ...s,
                      [lab.name]: time
                    }))
                  }
                  className={`px-4 py-1.5 rounded-lg border transition font-semibold shadow-sm
                    ${
                      selectedSlot[lab.name] === time
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-cyan-50 hover:border-cyan-300"
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
            <button
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg py-2 shadow hover:opacity-90 text-sm transition"
              onClick={() => handleBookAppointment(lab)}
            >
              <span className="inline-flex items-center gap-2">
                <svg width="18" height="18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" fill="#FFF" stroke="#2563eb" strokeWidth="2"/></svg>
                Book Appointment
              </span>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LabTestPage;

