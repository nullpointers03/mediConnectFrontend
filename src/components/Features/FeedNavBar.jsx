import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "..//../assets/logo.jpg";

const OPENCAGE_API_KEY = "04e8aeff02324bac90bbf7d8ced01b0e";

function FeedNavbar() {
  const { currentUser } = useSelector((state) => state.user);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const initial = currentUser?.firstName
    ? currentUser.firstName.charAt(0).toUpperCase()
    : "";

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchAddress(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        setError(err.message);
      }
    );
  }, []);

  async function fetchAddress(lat, lng) {
  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${OPENCAGE_API_KEY}&no_annotations=1&language=en`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const components = data.results[0].components;

      const village = components.village || "";
      const city = components.city || "";
      const county = components.county || "";
      const country = components.country || "";

      setLocation({ village, city, county, country });
    } else {
      setLocation(null);
    }
  } catch {
    setLocation(null);
  }
}


  return (
  <nav className="bg-white px-6 py-3 flex items-center justify-between shadow-md mb-6">
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2">
       <div className="p-2 rounded-full text-white flex items-center justify-center">
        <img src={logo} alt="logo" className="h-7 w-7 object-contain" />
        </div>
        <span className="text-2xl font-bold text-blue-800">MediConnect</span>
      </div>
      <span className="text-xs text-gray-500 ml-1 mt-1">
        {error && error}
        {!error && location && (
          <div className="space-y-0.5 flex gap-1">
            {location.village && <div>{location.village}</div>},
            {location.city && <div>{location.city}</div>}
            {location.county && <div>{location.county}</div>},
            {location.country && <div>{location.country}</div>}
          </div>
        )}
        {!error && !location && "Fetching location..."}
      </span>
    </div>
    <div className="flex items-center gap-2">
      <div className="bg-blue-400 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center text-lg shadow-md">
        {initial}
      </div>
    </div>
  </nav>
);

}

export default FeedNavbar;
