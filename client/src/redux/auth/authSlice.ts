import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post("/api/login", userData);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isAdmin: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAdmin = action.payload.user.email.endsWith("@alphaware.com");
    });
  },
});

export default authSlice.reducer;
