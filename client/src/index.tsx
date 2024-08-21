import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JobListings from "./pages/JobListings";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import LandingRedirect from "./components/LandingRedirect";
import ProtectedRoute from "./components/ProtectedRoute";
import App from "./App"; // Use the updated App component

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingRedirect />,
  },
  {
    path: "/",
    element: <App />, // The App component handles initial authentication check
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "jobs", element: <JobListings /> },
          { path: "jobs/:jobId", element: <JobDetails /> },
          { path: "profile", element: <Profile /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
