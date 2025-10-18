import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice.jsx";
import appointmentReducer from "../appointmentSlice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer, // Use the default export reducer
  },
});

export default store;
