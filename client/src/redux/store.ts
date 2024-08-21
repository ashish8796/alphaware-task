import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import jobsReducer from "./jobs";

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
  },
});

export default store;
