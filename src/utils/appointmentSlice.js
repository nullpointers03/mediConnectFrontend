import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment(state, action) {
      state.appointments.push(action.payload);
    },
    clearAppointments(state) {
      state.appointments = [];
    },
  },
});

export const { addAppointment, clearAppointments } = appointmentSlice.actions;
export default appointmentSlice.reducer;
