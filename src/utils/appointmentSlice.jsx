import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: JSON.parse(localStorage.getItem("appointments") || "[]"),
  selectedLab: null,
  selectedSlot: null,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setSelectedLab: (state, action) => {
      state.selectedLab = action.payload;
    },
    setSelectedSlot: (state, action) => {
      state.selectedSlot = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
      localStorage.setItem("appointments", JSON.stringify(state.appointments));
    },
    clearBooking: (state) => {
      state.selectedLab = null;
      state.selectedSlot = null;
    }
  },
});

export const { setSelectedLab, setSelectedSlot, addAppointment, clearBooking } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
