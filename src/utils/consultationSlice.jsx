import { createSlice } from "@reduxjs/toolkit";

const consultationSlice = createSlice({
  name: "consultation",
  initialState: { current: null },
  reducers: {
    addConsultation: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { addConsultation } = consultationSlice.actions;
export default consultationSlice.reducer;
