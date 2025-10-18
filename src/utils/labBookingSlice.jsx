// Assume you use Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLab: null,
  selectedSlot: null,
};

const labBookingSlice = createSlice({
  name: "labBooking",
  initialState,
  reducers: {
    bookLabTest: (state, action) => {
      // action.payload: {lab, slot}
      state.selectedLab = action.payload.lab;
      state.selectedSlot = action.payload.slot;
    },
    clearBooking: (state) => {
      state.selectedLab = null;
      state.selectedSlot = null;
    }
  }
});

export const { bookLabTest, clearBooking } = labBookingSlice.actions;
export default labBookingSlice.reducer;
