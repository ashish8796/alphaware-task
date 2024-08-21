import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./authTypes";

// Async action for user login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      return response.data as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Login failed"
      );
    }
  }
);

// Async action for user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/api/auth/signup", userData);
      return response.data as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || "Signup failed"
      );
    }
  }
);

// Async action for user logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/api/auth/logout");
    return;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});
