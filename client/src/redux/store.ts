import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import jobsReducer from "./jobs";

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
