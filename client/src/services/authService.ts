import axiosClient from "./axiosClient";
import Cookies from "js-cookie";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserSignupData extends UserCredentials {
  name: string;
}

// Login user
export const login = async (credentials: UserCredentials) => {
  const response = await axiosClient.post("/users/login", credentials);
  if (response.data) {
    Cookies.set("token", response.data.token, { expires: 7 });
    Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });
  }
  return response.data;
};

// Signup user
export const signup = async (userData: UserSignupData) => {
  const response = await axiosClient.post("/users/signup", userData);
  if (response.data) {
    Cookies.set("token", response.data.token, { expires: 7 });
    Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });
  }
  return response.data;
};

// Logout user
export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("user");
};

// Get current user
export const getCurrentUser = () => {
  const user = Cookies.get("user");
  return user ? JSON.parse(user) : null;
};

// Get current token
export const getToken = () => {
  return Cookies.get("token");
};
