import React from "react";
import { Activity, Heart, Calendar } from "lucide-react";

const BodyHealthScore = ({
  healthScore = 82,
  heartRate = 76,
  nextAppointment = null, // Example: {date: 'Oct 20, 2025', time: '10:00 AM'}
}) => {
  return (
    <div className="bg-blue-50 rounded-xl  p-8 w-full max-w-full mx-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-7xl mx-auto">
        {/* Health Score */}
        <div className="flex-1 bg-green-50 rounded-lg p-8 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <Activity className="h-16 w-16 text-green-600 mb-4" />
          <span className="text-5xl font-extrabold text-green-700">{healthScore}%</span>
          <span className="text-gray-700 mt-3 font-semibold uppercase tracking-wide">Health Score</span>
        </div>
        {/* Heart Rate */}
        <div className="flex-1 bg-red-50 rounded-lg p-8 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <Heart className="h-16 w-16 text-red-600 mb-4" />
          <span className="text-5xl font-extrabold text-red-700">{heartRate} bpm</span>
          <span className="text-gray-700 mt-3 font-semibold uppercase tracking-wide">Heart Rate</span>
        </div>
        {/* Appointment Status */}
        <div className="flex-1 bg-blue-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <Calendar className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
          {nextAppointment ? (
            <>
              <h4 className="font-bold text-blue-700 mb-2 text-center text-xl">Next Appointment</h4>
              <p className="text-gray-700 text-center text-lg">{nextAppointment.date} at {nextAppointment.time}</p>
            </>
          ) : (
            <p className="text-gray-500 italic text-center text-lg">No appointments scheduled</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyHealthScore;
