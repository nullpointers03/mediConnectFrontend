import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice.jsx";
import consultationReducer from "./consultationSlice.jsx";
import labBookingReducer from "./labBookingSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer, 
    consultation: consultationReducer,
    labBooking: labBookingReducer,
  },
});

export default store;