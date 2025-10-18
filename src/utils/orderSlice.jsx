// redux/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("orders") || "[]"),
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.list));
    },
    clearOrders: (state) => {
      state.list = [];
      localStorage.removeItem("orders");
    }
  }
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
