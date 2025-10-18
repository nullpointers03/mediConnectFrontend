import React, { useState } from 'react';

// SummaryCard as subcomponent
const SummaryCard = () => {
  const findings = {
    diagnosis: "Seasonal allergic rhinitis with mild symptoms",
    vitals: "BP: 120/80, Temp: 98.4°F, Pulse: 72 bpm - All normal",
    symptoms: "Sneezing, runny nose, mild headache for 3 days",
  };
  const prescriptions = [
    {
      name: "Cetirizine 10mg",
      desc: "Antihistamine",
      note: "1 tablet once daily after dinner",
      duration: "7 days"
    },
    {
      name: "Montelukast 10mg",
      desc: "Anti-allergic",
      note: "1 tablet once daily before bedtime",
      duration: "7 days"
    }
  ];
  const tasks = [
    "Take medications as prescribed (Daily for next 7 days)",
    "Avoid known allergens (Dust, pollen, and pet dander)",
    "Follow-up if symptoms persist (After 7 days or if condition worsens)"
  ];
  const advice = "Stay hydrated, use a humidifier at home, and consider wearing a mask outdoors during high pollen days. If symptoms worsen or you develop fever, contact immediately.";

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto space-y-7">
        {/* AI Summary Tag */}
        <div className="flex items-center bg-purple-50 border-l-4 border-purple-400 p-4 rounded-xl shadow text-xs">
          <span className="mr-2 text-purple-500">
            <svg width="16" height="16" fill="currentColor" className="inline align-middle"><circle cx="8" cy="8" r="8" /></svg>
          </span>
          <span className="text-purple-700 font-semibold">AI-Generated Summary</span>
          <span className="ml-3 text-gray-600">This summary was automatically generated from your consultation using our AI technology.</span>
        </div>
        {/* Key Findings */}
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <div className="flex items-center mb-3">
            <span className="text-blue-500 mr-2"><svg width="20" height="20" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="3"/></svg></span>
            <span className="font-bold text-lg text-gray-700">Key Findings</span>
          </div>
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-600">Diagnosis: </span>
              <span className="text-gray-700">{findings.diagnosis}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Vital Signs: </span>
              <span className="text-gray-700">{findings.vitals}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Symptoms Discussed: </span>
              <span className="text-gray-700">{findings.symptoms}</span>
            </div>
          </div>
        </div>
        {/* Prescriptions */}
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <div className="flex items-center mb-3">
            <span className="text-green-500 mr-2"><svg width="20" height="20" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="3"/></svg></span>
            <span className="font-bold text-lg text-gray-700">Prescriptions</span>
          </div>
          <div className="divide-y divide-gray-100">
            {prescriptions.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2">
                <div>
                  <div className="text-gray-900 font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                  <div className="text-xs text-gray-500">{item.note}</div>
                  <div className="text-xs text-gray-400">Duration: {item.duration}</div>
                </div>
                <button className="bg-green-600 text-white font-semibold rounded px-3 py-1 text-xs shadow hover:bg-green-700">Order</button>
              </div>
            ))}
          </div>
        </div>
        {/* Follow Up Tasks */}
        <div className="bg-white rounded-2xl shadow-lg border p-6">
          <div className="flex items-center mb-3">
            <span className="text-orange-500 mr-2"><svg width="20" height="20" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="3"/></svg></span>
            <span className="font-bold text-lg text-gray-700">Follow-up Tasks</span>
          </div>
          <ul className="space-y-2 mt-2">
            {tasks.map((task, i) => (
              <li key={i} className="flex items-center">
                <input type="checkbox" className="accent-orange-500 mr-2 rounded" />
                <span className="text-sm text-gray-700">{task}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Doctor's Advice */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-5 shadow-lg">
          <span className="block font-semibold text-blue-700 mb-2 text-base">Doctor's Advice</span>
          <span className="text-sm text-blue-900">{advice}</span>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg px-8 py-3 w-full shadow transition hover:opacity-95 text-base">Record New Consultation</button>
          <button className="bg-white border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 w-full">Save to Records</button>
          <button className="bg-white border border-gray-300 text-gray-800 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 w-full">Share Summary</button>
        </div>
      </div>
    </div>
  );
};

// Main combined dashboard
const PatientDashboard = () => {
  const [location, setLocation] = useState('Delhi (Current location)');

  return (
    <div className="min-h-screen bg-gray-50 w-full pb-10">
      <div className="max-w-5xl mx-auto pt-6 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Patient Dashboard</h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl shadow flex flex-col justify-center gap-0 mb-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
            <span className="font-semibold text-lg text-gray-700 mb-2 md:mb-0">Available Doctors</span>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 focus:ring-2 focus:ring-green-200 focus:border-blue-400 outline-none transition-all text-gray-700 bg-white"
              >
                <option>Delhi (Current location)</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
              <button className="bg-blue-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold transition-all shadow">Your Consultations</button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex flex-col items-center py-10">
            <div className="border-2 border-red-300 rounded-lg px-12 py-6 bg-white shadow text-center mb-10">
              <span className="text-xl font-semibold text-red-700">No Doctor Available</span>
            </div>
            <SummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
