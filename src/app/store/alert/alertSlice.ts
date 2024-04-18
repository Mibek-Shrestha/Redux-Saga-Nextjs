import { createSlice } from "@reduxjs/toolkit";

import { IAlertState } from "../../interface";

const INITIAL_STATE: IAlertState = {
  openAlert: false,
  message: "Something went wrong!",
  severity: "error",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    openAlert: (state: any, action) => {
      state.openAlert = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeAlert: (state: any) => {
      // state.currentUser= action.payload;
      state.openAlert = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
