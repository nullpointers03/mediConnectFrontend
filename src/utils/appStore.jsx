import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice.jsx";
import consultationReducer from "./consultationSlice.jsx";
import labBookingReducer from "./labBookingSlice.jsx";
import cartReducer from "./cartSlice.jsx";
import orderReducer from "./orderSlice.jsx";
import appointmentReducer from "./appointmentSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer, 
    consultation: consultationReducer,
    labBooking: labBookingReducer,
    cart: cartReducer,
    orders: orderReducer,
    appointments: appointmentReducer,
  },
});

export default store;