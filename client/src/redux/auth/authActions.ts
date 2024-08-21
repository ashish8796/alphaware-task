import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  UserCredentials,
  UserSignupData,
  getToken,
  getCurrentUser,
} from "../../services/authService";
import {
  login as loginService,
  signup as signupService,
  logout as logoutService,
} from "../../services/authService";
import { User } from "./authTypes";
import axiosClient from "../../services/axiosClient";

// Async action for user login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: UserCredentials, thunkAPI) => {
    try {
      const user = await loginService(credentials);
      return user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Async action for user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (userData: UserSignupData, thunkAPI) => {
    try {
      const user = await signupService(userData);
      return user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

// Async action for user logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await logoutService();
    return;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

// Validate user from cookies and store in Redux
export const validateUserFromCookies = createAsyncThunk(
  "auth/validateUserFromCookies",
  async (_, thunkAPI) => {
    const token = getToken();
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const response = await axiosClient.get("/users/validate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Token validation failed");
    }
  }
);
