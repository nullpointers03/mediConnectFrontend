import React from "react";
import { useSelector } from "react-redux";

const MedicalPassportPage = () => {
  const appointments = useSelector(state => state.appointments.list || []);
  const medicineOrders = useSelector(state => state.cart.items || []);
console.log(medicineOrders)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Your Medical Passport</h1>

      {/* Part 1: Appointments */}
      <section className="bg-white rounded-3xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold border-b border-blue-300 pb-4 mb-8 text-blue-700">Appointments</h2>
        {appointments.length > 0 ? (
          <div className="space-y-6">
            {appointments.map((apt) => (
              <div key={apt.id} className="border rounded-xl p-6 shadow-sm bg-blue-50 hover:shadow-md transition cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-xl text-blue-800">{apt.lab.name}</div>
                  <div className="text-sm text-gray-500">{new Date(apt.date).toLocaleString()}</div>
                </div>
                <div className="text-lg text-gray-700">Selected Slot: <span className="font-medium text-blue-600">{apt.slot}</span></div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No appointments recorded yet.</p>
        )}
      </section>

      {/* Part 2: Medicine Orders */}
      <section className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold border-b border-green-300 pb-4 mb-8 text-green-700">Medicine Orders</h2>
        {medicineOrders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {medicineOrders.map((med) => (
              <div key={med.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition border border-gray-200 flex flex-col items-center text-center">
                <img src={med.image} alt={med.name} className="w-24 h-24 object-contain mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold text-green-700">{med.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{med.dosage}</p>
                <p className="text-sm text-gray-600 mb-2 max-h-16 overflow-hidden">{med.usage}</p>
                <p className="text-xs text-gray-400 mb-2">Manufacturer: {med.manufacturer}</p>
                <div className="text-lg font-bold text-green-800">₹{med.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No medicine orders found.</p>
        )}
      </section>
    </div>
  );
};


export default MedicalPassportPage;